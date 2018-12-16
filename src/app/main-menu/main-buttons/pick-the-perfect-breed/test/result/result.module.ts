import { NgModule } from '@angular/core';

import { BreedInfoModule } from 'src/app/shared-modules/breed-info/breed-info.module';
import { CardDirectivesModule } from 'src/app/shared-modules/card-directives/card-directives.module';
import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';
import { ResultRoutingModule } from './result-routing.module';

import { RateComponent } from '../result/rate/rate.component';
import { ResultComponent } from './result.component';

@NgModule({
    imports: [
        BreedInfoModule,
        CardDirectivesModule,
        SharedModulesModule,
        ResultRoutingModule
    ],
    declarations: [
        RateComponent,
        ResultComponent
    ],
    exports: []
})
export class ResultModule { }