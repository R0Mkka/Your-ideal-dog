import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';

import { LoadingService } from 'src/app/core/loading/loading.service';
import { DesignColorService } from 'src/app/core/design-color/design-color.service';
import { LocalStorageService } from "src/app/core/local-storage/local-storage.service";

import { WorkingWindow } from 'src/app/classes/workingWindow';

@Component({
    selector: 'change-design',
    templateUrl: './change-design.component.html',
    styleUrls: ['./change-design.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDesignComponent extends WorkingWindow implements OnInit {
    constructor(
        loading: LoadingService,
        designColor: DesignColorService,
        localStorage: LocalStorageService,
        cdRef: ChangeDetectorRef) {
            super(loading, designColor, localStorage, cdRef, 0);
        }

    public ngOnInit(): void {
        this.initColorClasses();
        this.showContent(1000);
    }

    public setRedDesign(): void {
        this.setDesignColor('red');
    }

    public setGreenDesign(): void {
        this.setDesignColor('green');
    }

    public setBlueDesign(): void {
        this.setDesignColor('blue');
    }

    public setPurpleDesign(): void {
        this.setDesignColor('purple');
    }

    private setDesignColor(color: string): void {
        this.designColor.changeClassesSet(color);
        this.colorClasses = this.designColor.getClasses();
        this.localStorage.set('designColor', JSON.stringify(this.colorClasses));
    }
}