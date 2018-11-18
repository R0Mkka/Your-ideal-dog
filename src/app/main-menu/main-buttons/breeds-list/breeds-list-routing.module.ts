import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BreedsListComponent } from './breeds-list.component';

const breedsListRoutes: Routes = [
    {
        path: '',
        component: BreedsListComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(breedsListRoutes) ],
    exports: [ RouterModule ]
})
export class BreedsListRoutingModule { }
