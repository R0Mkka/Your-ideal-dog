import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { Router } from '@angular/router';

import { DesignColorService } from 'src/app/core/design-color/design-color.service';
import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';

import { ColorClasses } from 'src/app/dataTypes/colorClasses';

@Component({
    selector: 'home-button',
    templateUrl: './home-button.component.html',
    styleUrls: ['./home-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeButtonComponent implements OnInit, OnDestroy {
    public colorClasses: ColorClasses;
    private alive: boolean;

    constructor(
        private designColor: DesignColorService,
        private localStorage: LocalStorageService,
        private router: Router) {
            this.alive = true;
        }

    public ngOnInit(): void {
        this.initColorClasses();
        this.subscribeOnDesignColorChanges();
    }

    public ngOnDestroy(): void {
        this.alive = false;
    }

    public goHome(): void {
        this.router.navigate(['/main-menu']);
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