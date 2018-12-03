import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';

import { WorkingWindow } from 'src/app/classes/workingWindow';
import { LoadingService } from 'src/app/core/loading/loading.service';
import { DesignColorService } from 'src/app/core/design-color/design-color.service';
import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';
import { HttpService } from 'src/app/core/http/http.service';

import { Breed } from 'src/app/dataTypes/breed';

@Component({
    selector: 'favorite-breeds',
    templateUrl: './favorite-breeds.component.html',
    styleUrls: ['./favorite-breeds.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoriteBreedsComponent extends WorkingWindow implements OnInit {
    public favoriteBreeds: Breed[];
    public isBreedInfoShown: boolean;
    public selectedBreed: Breed;

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
        this.initFavoriteBreeds();
    }

    public showBreedInfo(breed: Breed): void {
        this.selectedBreed = breed;
        this.isBreedInfoShown = true;
    }

    public hideBreedInfo(): void {
        this.isBreedInfoShown = false;
    }

    private initFavoriteBreeds(): void {
        this.http.getBreeds().subscribe((breeds: Breed[]) => {
            this.favoriteBreeds = breeds;
        });
    }
}