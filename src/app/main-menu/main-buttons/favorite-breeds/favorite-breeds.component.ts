import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

import { WorkingWindow } from 'src/app/classes/workingWindow';
import { LoadingService } from 'src/app/core/loading/loading.service';
import { DesignColorService } from 'src/app/core/design-color/design-color.service';
import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';
import { HttpService } from 'src/app/core/http/http.service';

import { IFullBreedInfo } from 'src/app/dataTypes/fullBreedInfo';

@Component({
    selector: 'favorite-breeds',
    templateUrl: './favorite-breeds.component.html',
    styleUrls: ['./favorite-breeds.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoriteBreedsComponent extends WorkingWindow implements OnInit {
    public favoriteBreeds: Observable<IFullBreedInfo[]>;
    public isBreedInfoShown: boolean;
    public selectedBreed: IFullBreedInfo;
    public isEmptyList: boolean;
    private favoriteBreedsCount: number;

    constructor(
        loading: LoadingService,
        designColor: DesignColorService,
        localStorage: LocalStorageService,
        cdRef: ChangeDetectorRef,
        private http: HttpService) {
            super(loading, designColor, localStorage, cdRef, 0);

            this.isBreedInfoShown = false;
            this.selectedBreed = null;
            this.isEmptyList = false;
            this.favoriteBreedsCount = 0;
        }

    ngOnInit(): void {
        this.initColorClasses();
        this.showContent(1000);
        this.initFavoriteBreeds();
    }

    public recountFavorites(newFavorite: boolean): void {
        if (newFavorite) {
            this.favoriteBreedsCount++;
        } else {
            this.favoriteBreedsCount--;
        }

        this.isEmptyList = this.checkIsListEmpty();
    }

    public showBreedInfo(breed: IFullBreedInfo): void {
        this.selectedBreed = breed;
        this.isBreedInfoShown = true;
    }

    public hideBreedInfo(): void {
        this.isBreedInfoShown = false;
    }

    public checkIsListEmpty(): boolean {
        return this.favoriteBreedsCount === 0;
    }

    private initFavoriteBreeds(): void {
        this.favoriteBreeds = this.http.getFavoriteBreeds();

        this.http.getFavoriteBreeds().subscribe((breedsInfo: IFullBreedInfo[]) => {
            this.favoriteBreedsCount = breedsInfo.length;
            this.isEmptyList = this.checkIsListEmpty();
        });
    }
}