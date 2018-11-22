import { NgModule } from '@angular/core';

import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';
import { PickThePerfectBreedRoutingModule } from './pick-the-perfect-breed-routing.module';
import { TestRoutingModule } from './test/test-routing.module';

import { PickThePerfectBreedComponent } from './pick-the-perfect-breed.component';
import { TestComponent } from './test/test.component';

@NgModule({
    imports: [
        SharedModulesModule,
        PickThePerfectBreedRoutingModule,
        TestRoutingModule
    ],
    declarations: [
        PickThePerfectBreedComponent,
        TestComponent
    ],
    exports: [ ]
})
export class PickThePerfectBreedModule { }