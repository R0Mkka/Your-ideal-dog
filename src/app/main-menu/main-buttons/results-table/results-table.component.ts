import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';

import { LoadingService } from 'src/app/core/loading/loading.service';
import { DesignColorService } from 'src/app/core/design-color/design-color.service';
import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';

import { WorkingWindow } from 'src/app/classes/workingWindow';

@Component({
    selector: 'results-table',
    templateUrl: './results-table.component.html',
    styleUrls: ['./results-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultsTableComponent extends WorkingWindow implements OnInit {
    public resultList: any;

    constructor(
        loading: LoadingService,
        designColor: DesignColorService,
        localStorage: LocalStorageService,
        cdRef: ChangeDetectorRef) {
            super(loading, designColor, localStorage, cdRef, 0);

            this.resultList = new Array(20).fill({
                breeds: 'Собака, собака, собака',
                date: (new Date()).toLocaleDateString(),
                time: (new Date()).toLocaleTimeString(),
                rating: 10
            });
        }

    ngOnInit(): void {
        this.initColorClasses();
        this.showContent(1000);
    }
}