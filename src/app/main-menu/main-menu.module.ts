import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';
import { MainMenuRoutingModule } from './main-menu-routing.module';

import { MainMenuComponent } from './main-menu.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModulesModule,
        MainMenuRoutingModule
    ],
    declarations: [
        MainMenuComponent
    ],
    exports: [ ]
})
export class MainMenuModule { }