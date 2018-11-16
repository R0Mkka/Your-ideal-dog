import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartWindowComponent } from './start-window.component';

const startWindowRoutes: Routes = [
    {
        path: '',
        component: StartWindowComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(startWindowRoutes) ],
    exports: [ RouterModule ]
})
export class StartWindowRoutingModule {}