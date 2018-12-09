import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResultComponent } from './result.component';

const resultRoutes: Routes = [
    {
        path: '',
        component: ResultComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(resultRoutes) ],
    exports: [ RouterModule ]
})
export class ResultRoutingModule { }
