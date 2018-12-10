import { NgModule } from '@angular/core';

import { BreedInfoModule } from 'src/app/shared-modules/breed-info/breed-info.module';
import { CardDirectivesModule } from 'src/app/shared-modules/card-directives/card-directives.module';
import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';
import { ResultRoutingModule } from './result-routing.module';

import { StarButtonComponent } from 'src/app/shared-modules/star-button/star-button.component';
import { HomeButtonComponent } from 'src/app/shared-modules/home-button/home-button.component';
import { ResultComponent } from './result.component';

@NgModule({
    imports: [
        BreedInfoModule,
        CardDirectivesModule,
        SharedModulesModule,
        ResultRoutingModule
    ],
    declarations: [
        StarButtonComponent,
        HomeButtonComponent,
        ResultComponent
    ],
    exports: []
})
export class ResultModule { }