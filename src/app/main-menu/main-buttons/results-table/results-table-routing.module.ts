import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResultsTableComponent } from './results-table.component';

const resultsTableRoutes: Routes = [
    {
        path: '',
        component: ResultsTableComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(resultsTableRoutes) ],
    exports: [ RouterModule ]
})
export class ResultsTableRoutingModule { }