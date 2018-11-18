import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';

import { WorkingWindow } from 'src/app/classes/workingWindow';

import { LoadingService } from 'src/app/core/loading/loading.service';
import { DesignColorService } from 'src/app/core/design-color/design-color.service';
import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';

@Component({
    selector: 'pick-the-perfect-breed',
    templateUrl: './pick-the-perfect-breed.component.html',
    styleUrls: ['./pick-the-perfect-breed.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PickThePerfectBreedComponent extends WorkingWindow implements OnInit {
    constructor(
        loading: LoadingService,
        designColor: DesignColorService,
        localStorage: LocalStorageService,
        cdRef: ChangeDetectorRef) {
            super(loading, designColor, localStorage, cdRef, 2);
        }

    ngOnInit(): void {
        this.initColorClasses();
        this.showContent(1000);
    }
}