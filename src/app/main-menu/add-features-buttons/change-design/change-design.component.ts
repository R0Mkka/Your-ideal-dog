import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';

import { LoadingService } from 'src/app/core/loading/loading.service';
import { DesignColorService } from 'src/app/core/design-color/design-color.service';

import { ColorClasses } from 'src/app/dataTypes/colorClasses';

@Component({
    selector: 'change-design',
    templateUrl: './change-design.component.html',
    styleUrls: ['./change-design.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDesignComponent implements OnInit {
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

    public setRedDesign(): void {
        this.designColor.changeClassesSet('red');
        this.colorClasses = this.designColor.getClasses();
    }

    public setGreenDesign(): void {
        this.designColor.changeClassesSet('green');
        this.colorClasses = this.designColor.getClasses();
    }

    public setBlueDesign(): void {
        this.designColor.changeClassesSet('blue');
        this.colorClasses = this.designColor.getClasses();
    }

    public setPurpleDesign(): void {
        this.designColor.changeClassesSet('purple');
        this.colorClasses = this.designColor.getClasses();
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