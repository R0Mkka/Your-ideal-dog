import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';

import { DesignColorService } from 'src/app/core/design-color/design-color.service';
import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';

import { ColorClasses } from 'src/app/dataTypes/colorClasses';

@Component({
    selector: 'rate',
    templateUrl: './rate.component.html',
    styleUrls: ['./rate.component.scss']
})
export class RateComponent implements OnInit, OnDestroy {
    public colorClasses: ColorClasses;
    private alive: boolean;

    constructor(
        private designColor: DesignColorService,
        private localStorage: LocalStorageService) {
            this.alive = true;
        }

    ngOnInit(): void {
        this.initColorClasses();
        this.subscribeOnDesignColorChanges();
    }

    ngOnDestroy(): void {
        this.alive = false;
    }

    public rate(): void {
        
    }

    private subscribeOnDesignColorChanges(): void {
        this.designColor.classes$
        .pipe(takeWhile(() => this.alive))
        .subscribe((classes: ColorClasses) => {
            this.colorClasses = classes;
        });
    }

    private initColorClasses(): void {
        if (this.localStorage.has('designColor')) {
            this.colorClasses = JSON.parse(this.localStorage.get('designColor'));

            return;
        }

        this.colorClasses = this.designColor.getClasses();
    }
}