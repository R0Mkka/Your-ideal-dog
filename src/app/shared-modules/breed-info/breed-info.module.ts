import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardDirectivesModule } from 'src/app/shared-modules/card-directives/card-directives.module';

import { BreedInfoComponent } from './breed-info.component';

@NgModule({
    imports: [
        CommonModule,
        CardDirectivesModule
    ],
    declarations: [
        BreedInfoComponent
    ],
    exports: [
        BreedInfoComponent
    ]
})
export class BreedInfoModule { }