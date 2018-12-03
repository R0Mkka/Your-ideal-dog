import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FavoriteBreedsComponent } from './favorite-breeds.component';

const favoriteBreedsRoutes: Routes = [
    { 
        path: '',
        component: FavoriteBreedsComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(favoriteBreedsRoutes) ],
    exports: [ RouterModule ]
})
export class FavoriteBreedsRoutingModule { }