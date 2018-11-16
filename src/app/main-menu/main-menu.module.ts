import { NgModule } from '@angular/core';

import { MainMenuRoutingModule } from './main-menu-routing.module';

import { MainMenuComponent } from './main-menu.component';

@NgModule({
    imports: [
        MainMenuRoutingModule
    ],
    declarations: [
        MainMenuComponent
    ],
    exports: [ ]
})
export class MainMenuModule { }