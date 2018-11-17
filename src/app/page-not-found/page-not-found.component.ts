import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadingService } from 'src/app/core/loading/loading.service';

@Component({
    selector: 'page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrls: ['./page-not-found.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageNotFoundComponent implements OnInit {
    public isContentLoaded: boolean;

    constructor(
        private loading: LoadingService,
        private cdRef: ChangeDetectorRef) {
            this.isContentLoaded = false;
        }

    ngOnInit(): void {
        this.showContent();
    }

    public goBack(): void {
        history.back();
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