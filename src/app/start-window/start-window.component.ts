import { Component, ChangeDetectionStrategy } from '@angular/core';

import { LoadingService } from 'src/app/core/loading/loading.service';
import { DesignColorService } from 'src/app/core/design-color/design-color.service';

import { ColorClasses } from 'src/app/dataTypes/colorClasses';

@Component({
    selector: 'start-window',
    templateUrl: './start-window.component.html',
    styleUrls: ['./start-window.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartWindowComponent {
    public colorClasses: ColorClasses;

    constructor(
        private loading: LoadingService,
        private designColor: DesignColorService) {
            this.colorClasses = this.designColor.getClasses();
        }

    public startLoading() {
        this.loading.show();
    }
}