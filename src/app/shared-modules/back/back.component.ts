import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';

import { DesignColorService } from 'src/app/core/design-color/design-color.service';

import { ColorClasses } from 'src/app/dataTypes/colorClasses';

@Component({
    selector: 'back',
    templateUrl: './back.component.html',
    styleUrls: ['./back.component.scss']
})
export class BackComponent implements OnInit, OnDestroy {
    public colorClasses: ColorClasses;
    private alive: boolean;

    constructor(private designColor: DesignColorService) {
        this.colorClasses = this.designColor.getClasses();
        this.alive = true;
    }

    ngOnInit(): void {
        this.subscribeOnDesignColorChanges();
    }

    ngOnDestroy(): void {
        this.alive = false;
    }

    public goBack(): void {
        history.back();
    }

    private subscribeOnDesignColorChanges(): void {
        this.designColor.classes$
        .pipe(takeWhile(() => this.alive))
        .subscribe((classes: ColorClasses) => {
            this.colorClasses = classes;
        });
    }
}