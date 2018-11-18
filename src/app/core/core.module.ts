import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        SharedModulesModule
    ],
    declarations: [],
    exports: [
        BrowserModule,
        FormsModule,
        SharedModulesModule
    ]
})
export class CoreModule {}