import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainMenuComponent } from './main-menu.component';

const mainMenuRoutes: Routes = [
    {
        path: '',
        component: MainMenuComponent,
        children: [
            {
                path: 'change-design',
                loadChildren: './add-features-buttons/change-design/change-design.module#ChangeDesignModule'
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(mainMenuRoutes) ],
    exports: [ RouterModule ]
})
export class MainMenuRoutingModule { }
