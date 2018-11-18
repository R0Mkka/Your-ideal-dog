import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';
import { ChangeDesignRoutingModule } from './change-design-routing.module';

import { ChangeDesignComponent } from './change-design.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModulesModule,
        ChangeDesignRoutingModule
    ],
    declarations: [
        ChangeDesignComponent
    ],
    exports: [ ]
})
export class ChangeDesignModule { }