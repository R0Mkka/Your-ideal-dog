import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PickThePerfectBreedComponent } from './pick-the-perfect-breed.component';

const pickThePerfectBreedRoutes: Routes = [
    {
        path: '',
        component: PickThePerfectBreedComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(pickThePerfectBreedRoutes) ],
    exports: [ RouterModule ]
})
export class PickThePerfectBreedRoutingModule { }