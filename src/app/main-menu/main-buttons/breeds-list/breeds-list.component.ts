import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

import { LoadingService } from 'src/app/core/loading/loading.service';
import { DesignColorService } from 'src/app/core/design-color/design-color.service';
import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';
import { HttpService } from 'src/app/core/http/http.service';

import { WorkingWindow } from 'src/app/classes/workingWindow';
import { IBreed } from 'src/app/dataTypes/breed';

@Component({
    selector: 'breeds-list',
    templateUrl: './breeds-list.component.html',
    styleUrls: ['./breeds-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreedsListComponent extends WorkingWindow implements OnInit {
    public breedsList: Observable<IBreed[]>;
    public isBreedInfoShown: boolean;
    public selectedBreed: IBreed;

    constructor(
        loading: LoadingService,
        designColor: DesignColorService,
        localStorage: LocalStorageService,
        cdRef: ChangeDetectorRef,
        private http: HttpService) {
            super(loading, designColor, localStorage, cdRef, 0);

            this.isBreedInfoShown = false;
            this.selectedBreed = null;
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
        this.breedsList = this.http.getBreeds();
    }
}