import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RateSerice {
    public rating$: Subject<number>;
    private currentRating: number;

    constructor() {
        this.rating$ = new Subject<number>();
        this.currentRating = 0;
    }

    public setRatingValue(rating: number): void {
        this.rating$.next(rating);
        this.currentRating = rating;
    }

    public getCurrentRating(): number {
        return this.currentRating;
    }
}