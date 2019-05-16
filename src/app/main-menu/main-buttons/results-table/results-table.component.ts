import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';

import { LoadingService } from 'src/app/core/loading/loading.service';
import { DesignColorService } from 'src/app/core/design-color/design-color.service';
import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';
import { HttpService } from 'src/app/core/http/http.service';
import { AlertService } from 'src/app/shared-modules/alert/alert.service';

import { WorkingWindow } from 'src/app/classes/workingWindow';
import { ITableItem } from 'src/app/dataTypes/tableItem';
import { Alerts } from './results-table.config';

@Component({
    selector: 'results-table',
    templateUrl: './results-table.component.html',
    styleUrls: ['./results-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultsTableComponent extends WorkingWindow implements OnInit {
    public resultList: ITableItem[];
    public questionsAmount: number;
    public isServerBroken: boolean;

    constructor(
        loading: LoadingService,
        designColor: DesignColorService,
        localStorage: LocalStorageService,
        cdRef: ChangeDetectorRef,
        private http: HttpService,
        private alert: AlertService) {
            super(loading, designColor, localStorage, cdRef, 0);

            this.isServerBroken = false;
            this.questionsAmount = 14;
        }

    public ngOnInit(): void {
        this.initColorClasses();
        this.showContent(1000);
        this.initResultsList();
    }

    public getRating(currentRating: number): string {
        if (currentRating === -1) {
            return 'Нет';
        }

        return `${currentRating}/${this.questionsAmount}`;
    }

    private initResultsList(): void {
        this.http.getResultsTableList().subscribe({
            next: (results: ITableItem[]) => {
                this.resultList = this.formTestTimes(results);
            },
            error: (err) => {
                console.error(err);

                this.isServerBroken = true;

                this.alert.setSettings(Alerts.serverIsNotWorking);
                this.alert.show();

                if (!this.cdRef['destroyed']) {
                    this.cdRef.detectChanges();
                }
            }
        });
    }

    private formTestTimes(results: ITableItem[]): ITableItem[] {
        return results.map((result: ITableItem) => {
            const time = Math.round(Number(result.testTime) / 1000);
            const seconds = time % 60;
            const minutes = Math.floor(time / 60);

            result.testTime = `${minutes}:${seconds}`;

            return result;
        });
    }
}