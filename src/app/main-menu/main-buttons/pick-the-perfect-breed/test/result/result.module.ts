import { NgModule } from '@angular/core';

import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';
import { ResultRoutingModule } from './result-routing.module';

import { HomeButtonComponent } from 'src/app/shared-modules/home-button/home-button.component';
import { ResultComponent } from './result.component';

@NgModule({
    imports: [
        SharedModulesModule,
        ResultRoutingModule
    ],
    declarations: [
        HomeButtonComponent,
        ResultComponent
    ],
    exports: []
})
export class ResultModule { }