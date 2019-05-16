import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { takeWhile } from 'rxjs/operators';

import { LoadingService } from './core/loading/loading.service';
import { DesignColorService } from './core/design-color/design-color.service';
import { AlertService } from './shared-modules/alert/alert.service';

import { ColorClasses } from './dataTypes/colorClasses';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
    public isLoading: boolean;
    public isImageLoaded: boolean;
    public colorClasses: ColorClasses;
    private alive: boolean;

    constructor(
        private loading: LoadingService,
        private designColor: DesignColorService,
        private cdRef: ChangeDetectorRef,
        private alert: AlertService) {
            this.isLoading = false;
            this.isImageLoaded = false;
            this.colorClasses = this.designColor.getClasses();
            this.alive = true;
        }

    public ngOnInit(): void {
        this.subscribeOnLoading();
        this.subscribeOnDesignColorChanges();   
        this.listenForAutoAlertClosing(); 
    }

    public ngOnDestroy(): void {
        this.alive = false;
    }

    public showSpinner(): void {
        this.isImageLoaded = true;
    }

    private subscribeOnLoading(): void {
        this.loading.status$.subscribe((status: boolean) => {
            this.isLoading = status;

            if (!this.isLoading) this.isImageLoaded = false;

            if (!this.cdRef['destroyed']) {
                this.cdRef.detectChanges();
            }
        });
    }

  private subscribeOnDesignColorChanges(): void {
    this.designColor.classes$
    .pipe(takeWhile(() => this.alive))
    .subscribe((classes: ColorClasses) => {
      this.colorClasses = classes;
    });
  }

  private listenForAutoAlertClosing(): void {
    const self = this;

    window.addEventListener('popstate', () => {
        self.alert.hide();
    });
  }
}
