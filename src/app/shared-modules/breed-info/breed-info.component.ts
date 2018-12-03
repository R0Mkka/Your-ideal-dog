import { Component, Input, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';

import { HttpService } from 'src/app/core/http/http.service';

import { Breed } from 'src/app/dataTypes/breed';

@Component({
    selector: 'breed-info',
    templateUrl: './breed-info.component.html',
    styleUrls: ['./breed-info.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreedInfoComponent implements OnInit {
    @Input() public breed: Breed;
    @Output() public closeModal: EventEmitter<any>;

    public breedDescription: any;
    public isDescriptionLoaded: boolean;
    public isFavoriteImage: string;

    constructor(
        private http: HttpService,
        private cdRef: ChangeDetectorRef) {
            this.closeModal = new EventEmitter<any>();

            this.breedDescription = null;
            this.isDescriptionLoaded = false;
            this.isFavoriteImage = '/src/assets/images/icons/favorite-grey.png';
        }

    ngOnInit(): void {
        this.getBreedDescription();
    }

    public emitModalClose(): void {
        this.closeModal.emit();
    }

    private getBreedDescription(): void {
        this.http.getBreedDescription('Австралийская овчарка').subscribe((value: any) => {
            this.breedDescription = value[0];
            this.isDescriptionLoaded = true;

            if (!this.cdRef['destroyed']) {
                this.cdRef.detectChanges();
            }
        });
    }
}