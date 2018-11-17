import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    public status$: Observable<boolean>;
    private loading = new BehaviorSubject<boolean>(false);
    private currentStatus: boolean;

    constructor() {
        this.status$ = this.loading.asObservable();
        this.currentStatus = false;
    }

    public show(): void {
        this.loading.next(true);
        this.currentStatus = true;
    }

    public hide(): void {
        this.loading.next(false);
        this.currentStatus = false;
    }

    public getCurrentStatus(): boolean {
        return this.currentStatus;
    }
}