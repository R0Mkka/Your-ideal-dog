import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';

import { ColorClasses } from 'src/app/dataTypes/colorClasses';

import { classesSet } from './design-color.config';

@Injectable({
    providedIn: 'root'
})
export class DesignColorService {
    public classes$: Observable<ColorClasses>;
    private classesSubject = new BehaviorSubject<ColorClasses>(classesSet.redClasses);
    private currentClasses: ColorClasses; 

    constructor(private localStorage: LocalStorageService) {
        this.classes$ = this.classesSubject.asObservable();
        this.initStartColorClasses();
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

    private initStartColorClasses(): void {
        if (this.localStorage.has('designColor')) {
            this.currentClasses = JSON.parse(this.localStorage.get('designColor'));
            this.classesSubject.next(this.currentClasses);

            return;
        }

        this.currentClasses = classesSet.redClasses;
        this.classesSubject.next(this.currentClasses);
    }
}