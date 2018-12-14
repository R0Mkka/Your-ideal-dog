import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap, distinctUntilChanged, debounceTime, takeWhile } from 'rxjs/operators';

import { LoadingService } from 'src/app/core/loading/loading.service';
import { DesignColorService } from 'src/app/core/design-color/design-color.service';
import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';
import { HttpService } from 'src/app/core/http/http.service';
import { AlertService } from 'src/app/shared-modules/alert/alert.service';

import { WorkingWindow } from 'src/app/classes/workingWindow';
import { TextComment } from 'src/app/dataTypes/textComment';
import { Alerts } from './comment-the-project.config';

@Component({
    selector: 'comment-the-project',
    templateUrl: './comment-the-project.component.html',
    styleUrls: ['./comment-the-project.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentTheProjectComponent extends WorkingWindow implements OnInit, OnDestroy {
    public alertType: any;
    public commentForm: FormGroup;
    public isCommentListShown: boolean;
    private isValid: boolean;
    private statusChangesSub: boolean;

    constructor(
        loading: LoadingService,
        designColor: DesignColorService,
        localStorage: LocalStorageService,
        cdRef: ChangeDetectorRef,
        private http: HttpService,
        private formBuilder: FormBuilder,
        private alert: AlertService) {
            super(loading, designColor, localStorage, cdRef, 0);

            this.commentForm = this.formBuilder.group({
                fullName: ['', Validators.required],
                country: ['', Validators.required],
                comment: ['', Validators.required]
            });

            this.isCommentListShown = false;
            this.statusChangesSub = true;
            this.alertType = Alerts.error;
        }

    ngOnInit(): void {
        this.initColorClasses();
        this.showContent(1000);
        this.subscribeOnFormStatus();
    }

    ngOnDestroy(): void {
        this.statusChangesSub = false;
    }

    public onSubmit(comment: TextComment): void {
        if (this.isValid) {
            this.http.addNewComment(comment).subscribe();

            this.commentForm.patchValue({
                fullName: '',
                country: '',
                comment: ''
            });

            this.alert.setSettings(Alerts.ok);
        } else {
            this.alert.setSettings(Alerts.error);
        }

        this.alert.show();
    }

    private subscribeOnFormStatus(): void {
        this.commentForm.statusChanges.pipe(
            takeWhile(() => this.statusChangesSub),
            debounceTime(200),
            distinctUntilChanged(),
            tap({
                next: (status: string) => {
                    this.isValid = status === 'VALID';
                }
            })
        ).subscribe();
    }
}