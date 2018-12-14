import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';

import { AlertService } from './alert.service';

import { Images, Headers, Actions } from './alert.config';

@Component({
    selector: 'alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent implements OnInit {
    @Output() public answer: EventEmitter<boolean>;

    public showAlert: boolean;
    public image: string;
    public header: string;
    public message: string;
    public actions: string[];
    private alertType: any;

    constructor(
        private alertService: AlertService,
        private cdRef: ChangeDetectorRef) {
            this.answer = new EventEmitter<boolean>(false);

            this.showAlert = false;
        }

    ngOnInit(): void {
        this.subscribeOnAlertShow();
        this.subscribeOnAlertSettingsChanges();
    }

    public buttonAction(action: any): void {
        if (this.alertType.useAnswer) {
            this.alertService.setAnswer(action.text === 'Да');
        }

        this.alertService.hide();
    }

    public backdropClick(): void {
        this.showAlert = false;
        this.alertService.navigateAway$.next(false);
    }

    private subscribeOnAlertShow(): void {
        this.alertService.alertStatus$.subscribe((status: boolean) => {
            this.showAlert = status;

            if (!this.cdRef['destroyed']) {
                this.cdRef.detectChanges();
            }
        });
    }

    private subscribeOnAlertSettingsChanges(): void {
        this.alertService.alertSettings$.subscribe((settings: any) => {
            this.alertType = settings;
            this.initAlert();
        });
    }

    private initAlert(): void {
        if (this.alertType) {
            this.image = Images[this.alertType.type];
            this.header = Headers[this.alertType.type];
            this.message = this.alertType.message;
            this.actions = [];
            this.alertType.actions.forEach(name => {
                this.actions.push(Actions[name]);
            });
        }
    }
}