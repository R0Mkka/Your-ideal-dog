import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';

import { LoadingService } from 'src/app/core/loading/loading.service';
import { DesignColorService } from 'src/app/core/design-color/design-color.service';

import { ColorClasses } from 'src/app/dataTypes/colorClasses';

@Component({
    selector: 'page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrls: ['./page-not-found.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageNotFoundComponent implements OnInit {
    public isContentLoaded: boolean;
    public colorClasses: ColorClasses;

    constructor(
        private loading: LoadingService,
        private designColor: DesignColorService,
        private cdRef: ChangeDetectorRef) {
            this.isContentLoaded = false;
            this.colorClasses = this.designColor.getClasses();
        }

    ngOnInit(): void {
        this.showContent();
    }

    private showContent(): void {
        if (this.loading.getCurrentStatus()) {
            setTimeout(() => {
                this.loading.hide();
                this.isContentLoaded = true;
                if (!this.cdRef['destroyed']) {
                    this.cdRef.detectChanges();
                }
            }, 500);

            return;
        }
        
        this.isContentLoaded = true;
        if (!this.cdRef['destroyed']) {
            this.cdRef.detectChanges();
        }
    }
}