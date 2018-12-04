import { Component, Input, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';

import { HttpService } from 'src/app/core/http/http.service';

import { IBreed } from 'src/app/dataTypes/breed';
import { IBreedDescription } from 'src/app/dataTypes/breedDescription';
import { IFullBreedInfo } from 'src/app/dataTypes/fullBreedInfo';

@Component({
    selector: 'breed-info',
    templateUrl: './breed-info.component.html',
    styleUrls: ['./breed-info.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreedInfoComponent implements OnInit {
    @Input() public breed: IBreed;
    @Output() public closeModal: EventEmitter<any>;
    @Output() public favoriteStatusChange: EventEmitter<boolean>;

    public breedDescription: IBreedDescription;
    public isDescriptionLoaded: boolean;
    public favoriteImage: string;
    public isFavoriteImageLoaded: boolean;

    constructor(
        private http: HttpService,
        private cdRef: ChangeDetectorRef) {
            this.closeModal = new EventEmitter<any>();
            this.favoriteStatusChange = new EventEmitter<boolean>();

            this.breedDescription = null;
            this.isDescriptionLoaded = false;
            this.isFavoriteImageLoaded = false;
        }

    ngOnInit(): void {
        this.getBreedDescription();
        this.setFavoriteImage();
    }

    public emitModalClose(): void {
        this.closeModal.emit();
    }

    public toggleFavoriteStatus(): void {
        if (this.favoriteImage === '/src/assets/images/icons/favorite-grey.png') {
            this.favoriteImage = '/src/assets/images/icons/favorite-pink.png';

            this.http.addToFavoriteBreeds(this.breed, this.breedDescription).subscribe();
            this.favoriteStatusChange.emit(true);
        } else {
            this.favoriteImage = '/src/assets/images/icons/favorite-grey.png';

            this.http.removeFromFavoriteBreeds(this.breed.name).subscribe();
            this.favoriteStatusChange.emit(false);
        }
    }

    private getBreedDescription(): void {
        this.http.getBreedDescription('Австралийская овчарка').subscribe((value: IBreedDescription) => {
            this.breedDescription = value[0];
            this.isDescriptionLoaded = true;

            if (!this.cdRef['destroyed']) {
                this.cdRef.detectChanges();
            }
        });
    }

    private setFavoriteImage(): void {
        this.http.getFavoriteBreeds().subscribe({
            next: (favoriteBreeds: IFullBreedInfo[]) => {
                favoriteBreeds.every((breedInfo: IFullBreedInfo) => {
                    if (this.breed.name === breedInfo.name) {
                        this.favoriteImage = '/src/assets/images/icons/favorite-pink.png';

                        return false;
                    }
    
                    return true;
                });
            },
            complete: () => {
                this.favoriteImage = this.favoriteImage || '/src/assets/images/icons/favorite-grey.png';
                this.isFavoriteImageLoaded = true;
                
                if (!this.cdRef['destroyed']) {
                    this.cdRef.detectChanges();
                }
            }
        });
    }
}