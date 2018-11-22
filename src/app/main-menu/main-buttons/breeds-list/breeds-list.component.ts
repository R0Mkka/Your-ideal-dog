import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';

import { LoadingService } from 'src/app/core/loading/loading.service';
import { DesignColorService } from 'src/app/core/design-color/design-color.service';
import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';

import { WorkingWindow } from 'src/app/classes/workingWindow';

@Component({
    selector: 'breeds-list',
    templateUrl: './breeds-list.component.html',
    styleUrls: ['./breeds-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreedsListComponent extends WorkingWindow implements OnInit {
    public breedsList: string[];

    constructor(
        loading: LoadingService,
        designColor: DesignColorService,
        localStorage: LocalStorageService,
        cdRef: ChangeDetectorRef) {
            super(loading, designColor, localStorage, cdRef, 0);

            this.breedsList = new Array(20);
        }

    ngOnInit(): void {
        this.initColorClasses();
        this.showContent(1000);
    }
}