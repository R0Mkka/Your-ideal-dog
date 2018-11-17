import { Component, ChangeDetectionStrategy } from '@angular/core';

import { LoadingService } from '../core/loading/loading.service';

@Component({
    selector: 'start-window',
    templateUrl: './start-window.component.html',
    styleUrls: ['./start-window.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartWindowComponent {
    constructor(private loading: LoadingService) {}

    public startLoading() {
        this.loading.show();
    }
}