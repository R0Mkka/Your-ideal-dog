import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { WorkingWindow } from 'src/app/classes/workingWindow';
import { LoadingService } from 'src/app/core/loading/loading.service';
import { DesignColorService } from 'src/app/core/design-color/design-color.service';
import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';

import { IBreed } from 'src/app/dataTypes/breed';
 
@Component({
    selector: 'result-window',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultComponent extends WorkingWindow implements OnInit {
    public winnerList: IBreed[];
    public winnerScales: number[];

    public isBreedInfoShown: boolean;
    public selectedBreed: IBreed;

    constructor(
        loading: LoadingService,
        designColor: DesignColorService,
        localStorage: LocalStorageService,
        cdRef: ChangeDetectorRef) {
            super(loading, designColor, localStorage, cdRef, 0);

            this.winnerScales = [];
        }

    ngOnInit(): void {
        this.initColorClasses();
        this.showContent(1000);
        this.initWinners();
    }

    public showBreedInfo(breed: IBreed): void {
        this.selectedBreed = breed;
        this.isBreedInfoShown = true;
    }

    public hideBreedInfo(): void {
        this.isBreedInfoShown = false;
    }

    private initWinners(): void {
        this.winnerList = JSON.parse(sessionStorage.getItem('result'));
        this.winnerList.forEach((winner: IBreed, index: number) => {
            this.winnerScales[index] = Math.round((winner.points / (this.winnerList[0].points + 10)) * 100);
        });
    }
}