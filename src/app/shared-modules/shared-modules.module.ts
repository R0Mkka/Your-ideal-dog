import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowContentDirective } from 'src/app/core/directives/show-content.directive';
import { BackButtonComponent } from './back-button/back-button.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ShowContentDirective,
        BackButtonComponent
    ],
    exports: [
        CommonModule,
        ShowContentDirective,
        BackButtonComponent
    ]
})
export class SharedModulesModule { }