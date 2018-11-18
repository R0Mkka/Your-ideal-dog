import { ChangeDetectorRef } from "@angular/core";

import { LoadingService } from "src/app/core/loading/loading.service";
import { DesignColorService } from "src/app/core/design-color/design-color.service";
import { LocalStorageService } from "src/app/core/local-storage/local-storage.service";

import { ColorClasses } from 'src/app/dataTypes/colorClasses';


export abstract class WorkingWindow {
    public isContentLoaded: boolean;
    protected colorClasses: ColorClasses;
    protected isDogsLoaded: boolean;
    private counter: number;

    constructor(
        protected loading: LoadingService,
        protected designColor: DesignColorService,
        protected localStorage: LocalStorageService,
        protected cdRef: ChangeDetectorRef,
        protected dogsCount: number) {
            if (!this.loading.getCurrentStatus()) this.loading.show();

            this.isContentLoaded = false;
            this.isDogsLoaded = false;
            this.counter = 0;
        }

    protected showContent(delay: number): void {
        if (this.loading.getCurrentStatus()) {
            setTimeout(() => {
                this.isContentLoaded = true;
                if (this.dogsCount === 0) {
                    this.loading.hide();
                    this.isDogsLoaded = true;
                }
                if (!this.cdRef['destroyed']) {
                    this.cdRef.detectChanges();
                }
            }, delay);

            return;
        }

        this.isContentLoaded = true;
        if (this.dogsCount === 0) {
            this.loading.hide();
            this.isDogsLoaded = true;
        }
        if (!this.cdRef['destroyed']) {
            this.cdRef.detectChanges();
        }
    }

    protected initColorClasses(): void {
        if (this.localStorage.has('designColor')) {
            this.colorClasses = JSON.parse(this.localStorage.get('designColor'));

            return;
        }

        this.colorClasses = this.designColor.getClasses();
    }

    protected dogLoaded(): void {
        if (++this.counter === this.dogsCount) {
            setTimeout(() => {
                this.loading.hide();
                this.isDogsLoaded = true;
                this.cdRef.detectChanges();
            }, 300);
        }
    }
}