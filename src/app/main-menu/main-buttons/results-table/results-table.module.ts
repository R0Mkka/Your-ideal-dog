import { NgModule } from '@angular/core';

import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';
import { ResultsTableRoutingModule } from './results-table-routing.module';

import { ResultsTableComponent } from './results-table.component';


@NgModule({
    imports: [
        SharedModulesModule,
        ResultsTableRoutingModule
    ],
    declarations: [
        ResultsTableComponent
    ],
    exports: []
})
export class ResultsTableModule { }