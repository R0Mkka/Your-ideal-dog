import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const mainButtonsRoutes: Routes = [
    {
        path: 'pick-the-perfect-breed',
        loadChildren: './pick-the-perfect-breed/pick-the-perfect-breed.module#PickThePerfectBreedModule'
    },
    {
        path: 'breeds-list',
        loadChildren: './breeds-list/breeds-list.module#BreedsListModule'
    }
];

@NgModule({
    imports: [ RouterModule.forChild(mainButtonsRoutes) ],
    exports: [ RouterModule ]
})
export class MainButtonsRoutingModule { }

