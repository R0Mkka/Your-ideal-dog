import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowContentDirective } from 'src/app/core/directives/show-content.directive';
import { BackButtonComponent } from './back-button/back-button.component';
import { HomeButtonComponent } from './home-button/home-button.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ShowContentDirective,
        BackButtonComponent,
        HomeButtonComponent,
        AlertComponent
    ],
    exports: [
        CommonModule,
        ShowContentDirective,
        BackButtonComponent,
        HomeButtonComponent,
        AlertComponent
    ]
})
export class SharedModulesModule { }