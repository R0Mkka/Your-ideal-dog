import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeDesignRoutingModule } from './change-design-routing.module';
import { ChangeDesignComponent } from './change-design.component';

@NgModule({
    imports: [
        CommonModule,
        ChangeDesignRoutingModule
    ],
    declarations: [
        ChangeDesignComponent
    ],
    exports: [ ]
})
export class ChangeDesignModule { }