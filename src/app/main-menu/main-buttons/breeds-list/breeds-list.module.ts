import { NgModule } from '@angular/core';

import { BreedInfoModule } from 'src/app/shared-modules/breed-info/breed-info.module';
import { CardDirectivesModule } from 'src/app/shared-modules/card-directives/card-directives.module';
import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';
import { BreedsListRoutingModule } from './breeds-list-routing.module';

import { BreedsListComponent } from './breeds-list.component';

@NgModule({
    imports: [
        BreedInfoModule,
        CardDirectivesModule,
        SharedModulesModule,
        BreedsListRoutingModule
    ],
    declarations: [
        BreedsListComponent
    ],
    exports: []
})
export class BreedsListModule { }