import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';

import { Button, main_buttons, other_buttons } from './main-menu.config';

import { LoadingService } from 'src/app/core/loading/loading.service';
import { DesignColorService } from 'src/app/core/design-color/design-color.service';

import { ColorClasses } from 'src/app/dataTypes/colorClasses';

@Component({
    selector: 'main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainMenuComponent implements OnInit {
    public mainButtons: Button[];
    public otherButtons: Button[];
    public isContentLoaded: boolean;
    public colorClasses: ColorClasses

    constructor(
        private loading: LoadingService,
        private designColor: DesignColorService,
        private cdRef: ChangeDetectorRef) {
            this.mainButtons = main_buttons;
            this.otherButtons = other_buttons;
            this.isContentLoaded = false;
            this.colorClasses = this.designColor.getClasses();
        }

    ngOnInit(): void {
        this.showContent();
    }

    public startLoading(): void {
        this.loading.show();
    }

    private showContent(): void {
        if (this.loading.getCurrentStatus()) {
            setTimeout(() => {
                this.loading.hide();
                this.isContentLoaded = true;
                if (!this.cdRef['destroyed']) {
                    this.cdRef.detectChanges();
                }
            }, 1000);

            return;
        }

        this.isContentLoaded = true;
        if (!this.cdRef['destroyed']) {
            this.cdRef.detectChanges();
        }
    }
}
