import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { classesSet } from './design-color.config';

import { ColorClasses } from 'src/app/dataTypes/colorClasses';

@Injectable({
    providedIn: 'root'
})
export class DesignColorService {
    public classes$: Observable<ColorClasses>;
    private classesSubject = new BehaviorSubject<ColorClasses>(classesSet.redClasses);
    private currentClasses: ColorClasses; 

    constructor() {
        this.classes$ = this.classesSubject.asObservable();
        this.currentClasses = classesSet.redClasses;
    }

    public getClasses(): ColorClasses {
        return this.currentClasses;
    }

    public changeClassesSet(colorsSet: string): void {
        let tempClasses = null;

        switch(colorsSet) {
            case 'red':
                tempClasses = classesSet.redClasses;                
                break;
            case 'green':
                tempClasses = classesSet.greenClasses;
                break;
            case 'blue':
                tempClasses = classesSet.blueClasses;
                break;
            case 'purple':
                tempClasses = classesSet.purpleClasses;
                break;
        }

        this.classesSubject.next(tempClasses);
        this.currentClasses = tempClasses;
    }
}