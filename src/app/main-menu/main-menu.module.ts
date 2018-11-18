import { NgModule } from '@angular/core';

import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';
import { MainButtonsRoutingModule } from './main-buttons/main-buttons-routing.module';
import { AddFeaturesButtonsRoutingModule } from './add-features-buttons/add-features-buttons-routing.module';
import { MainMenuRoutingModule } from './main-menu-routing.module';

import { MainMenuComponent } from './main-menu.component';

@NgModule({
    imports: [
        SharedModulesModule,
        MainButtonsRoutingModule,
        AddFeaturesButtonsRoutingModule,
        MainMenuRoutingModule
    ],
    declarations: [
        MainMenuComponent
    ],
    exports: [ ]
})
export class MainMenuModule { }