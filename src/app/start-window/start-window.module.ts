import { NgModule } from '@angular/core';

import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';
import { StartWindowRoutingModule } from './start-window-routing.module';

import { StartWindowComponent } from './start-window.component';

@NgModule({
    imports: [
        SharedModulesModule,
        StartWindowRoutingModule
    ],
    declarations: [
        StartWindowComponent
    ],
    exports: []
})
export class StartWindowModule {}