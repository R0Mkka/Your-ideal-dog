import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';

import { Button, main_buttons, other_buttons } from './main-menu.config';

import { LoadingService } from 'src/app/core/loading/loading.service';

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

    constructor(
        private loading: LoadingService,
        private cdRef: ChangeDetectorRef) {
            this.mainButtons = main_buttons;
            this.otherButtons = other_buttons;
            this.isContentLoaded = false;
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
