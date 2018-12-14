import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AlertService {
    public alertStatus$: BehaviorSubject<boolean>;
    public alertSettings$: BehaviorSubject<boolean>;
    public navigateAway$: Subject<boolean> = new Subject<boolean>();

    constructor() {
        this.alertStatus$ = new BehaviorSubject<boolean>(false);
        this.alertSettings$ = new BehaviorSubject<boolean>(null);
    }

    public show(): void {
        this.alertStatus$.next(true);
    }

    public hide(): void {
        this.alertStatus$.next(false);
    }

    public setSettings(alertSettings: any): void {
        this.alertSettings$.next(alertSettings);
    }

    public setAnswer(answer: boolean): void {
        this.navigateAway$.next(answer);
    }
}