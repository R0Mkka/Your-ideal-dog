import { NgModule } from '@angular/core';

import { BreedInfoModule } from 'src/app/shared-modules/breed-info/breed-info.module';
import { CardDirectivesModule } from 'src/app/shared-modules/card-directives/card-directives.module';
import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';
import { FavoriteBreedsRoutingModule } from './favorite-breeds-routing.module';

import { FavoriteBreedsComponent } from './favorite-breeds.component';

@NgModule({
    imports: [
        BreedInfoModule,
        CardDirectivesModule, 
        SharedModulesModule,
        FavoriteBreedsRoutingModule
    ],
    declarations: [
        FavoriteBreedsComponent
    ],
    exports: []
})
export class FavoriteBreedsModule { }