import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';

import { LoadingService } from 'src/app/core/loading/loading.service';

@Component({
    selector: 'comment-the-project',
    templateUrl: './comment-the-project.component.html',
    styleUrls: ['./comment-the-project.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentTheProjectComponent implements OnInit {
    public isContentLoaded: boolean;

    constructor(
        private loading: LoadingService,
        private cdRef: ChangeDetectorRef) {
            this.isContentLoaded = false;
            console.log(this.loading.getCurrentStatus());
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
            }, 1000);

            return;
        }
        
        this.isContentLoaded = true;
        if (!this.cdRef['destroyed']) {
            this.cdRef.detectChanges();
        }
    }
}