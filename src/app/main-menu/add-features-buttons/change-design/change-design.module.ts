import { NgModule } from '@angular/core';

import { ChangeDesignRoutingModule } from './change-design-routing.module';

import { ChangeDesignComponent } from './change-design.component';

@NgModule({
    imports: [
        ChangeDesignRoutingModule
    ],
    declarations: [
        ChangeDesignComponent
    ],
    exports: [ ]
})
export class ChangeDesignModule { }