import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        SharedModulesModule
    ],
    declarations: [],
    exports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        SharedModulesModule
    ]
})
export class CoreModule {}