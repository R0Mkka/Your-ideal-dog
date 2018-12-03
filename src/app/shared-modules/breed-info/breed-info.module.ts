import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreedInfoComponent } from './breed-info.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        BreedInfoComponent
    ],
    exports: [
        BreedInfoComponent
    ]
})
export class BreedInfoModule { }