import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {
        path: 'start-window',
        loadChildren: './start-window/start-window.module#StartWindowModule'
    },
    {
        path: 'main-menu',
        loadChildren: './main-menu/main-menu.module#MainMenuModule'
    },
    {
        path: '',
        redirectTo: 'start-window',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    declarations: [  ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }