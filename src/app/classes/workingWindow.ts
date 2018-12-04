import { ChangeDetectorRef } from "@angular/core";

import { LoadingService } from "src/app/core/loading/loading.service";
import { DesignColorService } from "src/app/core/design-color/design-color.service";
import { LocalStorageService } from "src/app/core/local-storage/local-storage.service";

import { ColorClasses } from 'src/app/dataTypes/colorClasses';

export abstract class WorkingWindow {
    public colorClasses: ColorClasses;
    public isContentLoaded: boolean;
    private delay: number;
    private counter: number;

    constructor(
        public loading: LoadingService,
        public designColor: DesignColorService,
        public localStorage: LocalStorageService,
        public cdRef: ChangeDetectorRef,
        public dogsCount: number) {
            if (!this.loading.getCurrentStatus()) this.loading.show();

            this.isContentLoaded = false;
            this.counter = 0;
        }

    public startLoading(): void {
        this.isContentLoaded = false;
        this.loading.show();
    }

    public showContent(delay: number): void {
        this.delay = delay;

        if (this.dogsCount === 0) {
            setTimeout(() => {
                this.loading.hide();
                this.isContentLoaded = true;

                if (!this.cdRef['destroyed']) {
                    this.cdRef.detectChanges();
                }
            }, this.delay);
        }
    }

    public initColorClasses(): void {
        if (this.localStorage.has('designColor')) {
            this.colorClasses = JSON.parse(this.localStorage.get('designColor'));

            return;
        }

        this.colorClasses = this.designColor.getClasses();
    }

    public dogLoaded(): void {
        if (++this.counter === this.dogsCount) {
            setTimeout(() => {
                this.loading.hide();
                this.isContentLoaded = true;
                
                if (!this.cdRef['destroyed']) {
                    this.cdRef.detectChanges();
                }
            }, this.delay);
        }
    }
}