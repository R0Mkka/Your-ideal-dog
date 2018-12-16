import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';

import { LoadingService } from 'src/app/core/loading/loading.service';
import { DesignColorService } from 'src/app/core/design-color/design-color.service';
import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';
import { HttpService } from 'src/app/core/http/http.service';
import { AlertService } from 'src/app/shared-modules/alert/alert.service';

import { WorkingWindow } from 'src/app/classes/workingWindow';
import { IBreed } from 'src/app/dataTypes/breed';
import { Alerts } from './breed-list.config';

@Component({
    selector: 'breeds-list',
    templateUrl: './breeds-list.component.html',
    styleUrls: ['./breeds-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreedsListComponent extends WorkingWindow implements OnInit {
    public breedsList: IBreed[];
    public isBreedInfoShown: boolean;
    public selectedBreed: IBreed;
    public isServerBroken: boolean;

    constructor(
        loading: LoadingService,
        designColor: DesignColorService,
        localStorage: LocalStorageService,
        cdRef: ChangeDetectorRef,
        private http: HttpService,
        private alert: AlertService) {
            super(loading, designColor, localStorage, cdRef, 0);

            this.isBreedInfoShown = false;
            this.selectedBreed = null;
            this.isServerBroken = false;
        }

    ngOnInit(): void {
        this.initColorClasses();
        this.showContent(1000);
        this.initBreedsList();
    }

    public setSelectedBreed(breed: IBreed): void {
        this.selectedBreed = breed;
    }

    public showBreedInfo(breed: IBreed): void {
        this.isBreedInfoShown = true;
    }

    public hideBreedInfo(): void {
        this.isBreedInfoShown = false;
    }

    private initBreedsList(): void {
        this.http.getBreeds().subscribe({
            next: (breeds: IBreed[]) => {
                this.breedsList = breeds;
            },
            error: (err) => {
                console.error(err);

                this.isServerBroken = true;

                this.alert.setSettings(Alerts.serverIsNotWorking);
                this.alert.show();
            },
            complete: () => {
                if (!this.cdRef['destroyed']) {
                    this.cdRef.detectChanges();
                }
            }
        });
    }
}