import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap, takeWhile } from 'rxjs/operators';

import { LoadingService } from 'src/app/core/loading/loading.service';
import { DesignColorService } from 'src/app/core/design-color/design-color.service';
import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';
import { HttpService } from 'src/app/core/http/http.service';
import { AlertService } from 'src/app/shared-modules/alert/alert.service';

import { WorkingWindow } from 'src/app/classes/workingWindow';
import { ITextComment } from 'src/app/dataTypes/textComment';
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
    public currentFullNameLength: number;
    public currentCountryLength: number;
    public currentCommentLength: number;
    public fullNameMaxLength: number;
    public countryMaxLength: number;
    public commentMaxLength: number;
    public isValidFullName: boolean;
    public isValidCountry: boolean;
    public isValidComment: boolean;
    public isSubmitDisabled: boolean;
    private isValidForm: boolean;
    private statusChangesSub: boolean;
    private valueChangesSub: boolean;

    constructor(
        loading: LoadingService,
        designColor: DesignColorService,
        localStorage: LocalStorageService,
        cdRef: ChangeDetectorRef,
        private http: HttpService,
        private formBuilder: FormBuilder,
        private alert: AlertService) {
            super(loading, designColor, localStorage, cdRef, 0);

            this.fullNameMaxLength = 45;
            this.countryMaxLength = 25;
            this.commentMaxLength = 150;

            this.currentFullNameLength = this.fullNameMaxLength;
            this.currentCountryLength = this.countryMaxLength;
            this.currentCommentLength = this.commentMaxLength;

            this.isValidFullName = true;
            this.isValidCountry = true;
            this.isValidComment = true;

            this.isSubmitDisabled = false;
            this.isCommentListShown = false;
            this.isValidForm = false;
            this.statusChangesSub = true;
            this.valueChangesSub = true;
            this.alertType = Alerts.error;
        }

    ngOnInit(): void {
        this.createForm();
        this.initColorClasses();
        this.showContent(1000);
        this.subscribeOnStatusChanges();
        this.subscribeOnValueChanges();
    }

    ngOnDestroy(): void {
        this.statusChangesSub = false;
        this.valueChangesSub = false;
    }

    public onSubmit(comment: ITextComment): void {
        const localDate = new Date();
            
        comment.date = localDate.toLocaleDateString();
        comment.time = localDate.toLocaleTimeString();

        if (!this.isSubmitDisabled) {
            this.isSubmitDisabled = true;

            if (this.isValidForm) {
                this.http.addNewComment(comment).subscribe({
                    next: () => {
                        this.commentForm.patchValue({
                            fullName: '',
                            country: '',
                            comment: ''
                        });
            
                        this.alert.setSettings(Alerts.ok);
                    },
                    error: (err) => {
                        console.error(err);
        
                        this.alert.setSettings(Alerts.serverIsNotWorking);
                        this.alert.show();

                        this.isSubmitDisabled = false;
        
                        if (!this.cdRef['destroyed']) {
                            this.cdRef.detectChanges();
                        }
                    },
                    complete: () => {
                        this.alert.show();

                        this.isSubmitDisabled = false;
        
                        if (!this.cdRef['destroyed']) {
                            this.cdRef.detectChanges();
                        }
                    }
                });
            } else {
                this.isSubmitDisabled = false;
                
                this.alert.setSettings(Alerts.error);
                this.alert.show();
            }
        }
    }

    public toggleCommentList(): void {
        this.isCommentListShown = !this.isCommentListShown;
    }

    private createForm(): void {
        this.commentForm = this.formBuilder.group({
            fullName: ['', [Validators.required, Validators.maxLength(this.fullNameMaxLength)] ],
            country: ['', [Validators.required, Validators.maxLength(this.countryMaxLength)] ],
            comment: ['', [Validators.required, Validators.maxLength(this.commentMaxLength)] ] 
        });
    }

    private subscribeOnStatusChanges(): void {
        this.commentForm.statusChanges.pipe(
            takeWhile(() => this.statusChangesSub),
            tap((status: string) => {
                this.isValidForm = status === 'VALID';
            })
        ).subscribe();
    }

    private subscribeOnValueChanges(): void {
        this.commentForm.valueChanges.pipe(
            takeWhile(() => this.valueChangesSub),
            tap(formValues => {
                this.isValidFullName = formValues.fullName.length <= this.fullNameMaxLength;
                if (this.isValidFullName) {
                    this.currentFullNameLength = this.fullNameMaxLength - formValues.fullName.length;
                } else {
                    this.currentFullNameLength = 0;
                }
                
                this.isValidCountry = formValues.country.length <= this.countryMaxLength;
                if (this.isValidCountry) {
                    this.currentCountryLength = this.countryMaxLength - formValues.country.length;
                } else {
                    this.currentCountryLength = 0;
                }
                
                this.isValidComment = formValues.comment.length <= this.commentMaxLength;
                if (this.isValidComment) {
                    this.currentCommentLength = this.commentMaxLength - formValues.comment.length;
                } else {
                    this.currentCommentLength = 0;
                }
            })
        ).subscribe();
    }
}