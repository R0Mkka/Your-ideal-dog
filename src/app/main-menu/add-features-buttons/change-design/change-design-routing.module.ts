import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChangeDesignComponent } from './change-design.component';

const changeDesignRoutes: Routes = [
    {
        path: '',
        component: ChangeDesignComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(changeDesignRoutes) ],
    exports: [ RouterModule ]
})
export class ChangeDesignRoutingModule { }