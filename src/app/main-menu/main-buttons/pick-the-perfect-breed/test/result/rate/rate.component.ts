import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';

import { DesignColorService } from 'src/app/core/design-color/design-color.service';
import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';

import { ColorClasses } from 'src/app/dataTypes/colorClasses';

@Component({
    selector: 'rate',
    templateUrl: './rate.component.html',
    styleUrls: ['./rate.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RateComponent implements OnInit, OnDestroy {
    public colorClasses: ColorClasses;
    public isRateModalShown: boolean;
    private alive: boolean;
    private rating: number;

    constructor(
        private designColor: DesignColorService,
        private localStorage: LocalStorageService) {
            this.isRateModalShown = false;
            this.alive = true;
            this.rating = 0;
        }

    public ngOnInit(): void {
        this.initColorClasses();
        this.subscribeOnDesignColorChanges();
    }

    ngOnDestroy(): void {
        this.alive = false;
    }

    public toggleRateModal(): void {
        this.isRateModalShown = !this.isRateModalShown;
    }

    public onRatingChange(rating: number): void {
        this.rating = rating;
    }

    public saveRating(): void {
        this.isRateModalShown = false;
    }

    private initColorClasses(): void {
        if (this.localStorage.has('designColor')) {
            this.colorClasses = JSON.parse(this.localStorage.get('designColor'));

            return;
        }

        this.colorClasses = this.designColor.getClasses();
    }

    private subscribeOnDesignColorChanges(): void {
        this.designColor.classes$
        .pipe(takeWhile(() => this.alive))
        .subscribe((classes: ColorClasses) => {
            this.colorClasses = classes;
        });
    }
}