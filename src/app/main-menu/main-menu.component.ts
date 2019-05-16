import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';

import { LoadingService } from 'src/app/core/loading/loading.service';
import { DesignColorService } from 'src/app/core/design-color/design-color.service';
import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';

import { WorkingWindow } from 'src/app/classes/workingWindow';
import { Button, mainButtons, otherButtons } from './main-menu.config';

@Component({
    selector: 'main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainMenuComponent extends WorkingWindow implements OnInit {
    public mainButtons: Button[];
    public otherButtons: Button[];

    constructor(
        loading: LoadingService,
        designColor: DesignColorService,
        localStorage: LocalStorageService,
        cdRef: ChangeDetectorRef) {
            super(loading, designColor, localStorage, cdRef, 2);
            
            this.mainButtons = mainButtons;
            this.otherButtons = otherButtons;
        }

    public ngOnInit(): void {
        this.initColorClasses();
        this.showContent(1000);
    }
}
