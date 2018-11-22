import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestComponent } from './test.component';

import { CloseTestGuard } from './close-test.guard';

const testRoutes: Routes = [
    {
        path: 'test',
        component: TestComponent,
        canDeactivate: [ CloseTestGuard ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(testRoutes) ],
    exports: [ RouterModule ],
    providers: [ CloseTestGuard ]
})
export class TestRoutingModule { }