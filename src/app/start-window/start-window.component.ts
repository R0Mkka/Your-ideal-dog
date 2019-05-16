import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';

import { LoadingService } from 'src/app/core/loading/loading.service';
import { DesignColorService } from 'src/app/core/design-color/design-color.service';
import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';

import { WorkingWindow } from 'src/app/classes/workingWindow';

@Component({
    selector: 'start-window',
    templateUrl: './start-window.component.html',
    styleUrls: ['./start-window.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartWindowComponent extends WorkingWindow implements OnInit {
    constructor(
        loading: LoadingService,
        designColor: DesignColorService,
        localStorage: LocalStorageService,
        cdRef: ChangeDetectorRef) {
            super(loading, designColor, localStorage, cdRef, 3);
        }

    public ngOnInit(): void {
        this.initColorClasses();
        this.showContent(1000);
    }

    public startLoading(): void {
        this.loading.show();
    }
}