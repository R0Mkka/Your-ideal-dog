import { NgModule } from '@angular/core';

import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';
import { BreedsListRoutingModule } from './breeds-list-routing.module';

import { BreedsListComponent } from './breeds-list.component';
import { CardHoverDirective } from './card-hover.directive';

@NgModule({
    imports: [
        SharedModulesModule,
        BreedsListRoutingModule
    ],
    declarations: [
        BreedsListComponent,
        CardHoverDirective
    ],
    exports: []
})
export class BreedsListModule { }