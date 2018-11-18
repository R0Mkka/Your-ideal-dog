import { NgModule } from '@angular/core';

import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';
import { PickThePerfectBreedRoutingModule } from './pick-the-perfect-breed-routing.module';

import { PickThePerfectBreedComponent } from './pick-the-perfect-breed.component';

@NgModule({
    imports: [
        SharedModulesModule,
        PickThePerfectBreedRoutingModule
    ],
    declarations: [
        PickThePerfectBreedComponent
    ],
    exports: [ ]
})
export class PickThePerfectBreedModule { }