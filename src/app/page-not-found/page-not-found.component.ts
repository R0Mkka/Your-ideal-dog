import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';

import { LoadingService } from 'src/app/core/loading/loading.service';
import { DesignColorService } from 'src/app/core/design-color/design-color.service';
import { LocalStorageService } from "src/app/core/local-storage/local-storage.service";

import { WorkingWindow } from 'src/app/classes/workingWindow';

@Component({
    selector: 'page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrls: ['./page-not-found.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageNotFoundComponent extends WorkingWindow implements OnInit {
    constructor(
        loading: LoadingService,
        designColor: DesignColorService,
        localStorage: LocalStorageService,
        cdRef: ChangeDetectorRef) {
            super(loading, designColor, localStorage, cdRef, 1);
        }

    ngOnInit(): void {
        this.initColorClasses();
        this.showContent(600);
    }
}