import { NgModule } from '@angular/core';

import { StartWindowRoutingModule } from './start-window-routing.module';

import { StartWindowComponent } from './start-window.component';

@NgModule({
    imports: [ StartWindowRoutingModule ],
    declarations: [ StartWindowComponent ],
    exports: []
})
export class StartWindowModule {}