import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'start-window',
    templateUrl: './start-window.component.html',
    styleUrls: ['./start-window.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartWindowComponent {
    constructor() {}
}