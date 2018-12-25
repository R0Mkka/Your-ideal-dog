import { Component, forwardRef, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'stars',
    templateUrl: './stars.component.html',
    styleUrls: ['./stars.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => StarsComponent),
            multi: true
        }
    ]
})
export class StarsComponent implements ControlValueAccessor {
    @Output() public ratingChanged: EventEmitter<number>;

    public stars: boolean[];

    constructor() {
        this.ratingChanged = new EventEmitter<number>();

        this.stars = new Array(5).fill(false);
    }

    get value(): number {
        return this.stars.reduce((total, starred) => {
            return total + (starred ? 1 : 0);
        }, 0);
    }

    public onChange = (rating: number): void => {
        this.ratingChanged.emit(rating);
    };

    public rate(rating: number): void {
        this.writeValue(rating);
    }

    public writeValue(rating: number): void {
        this.stars = this.stars.map((_, i) => rating > i);
        this.onChange(this.value);
    }

    public registerOnChange(fn: (rating: number) => void): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: () => void): void { }

    public setDisabledState(): void { }
}