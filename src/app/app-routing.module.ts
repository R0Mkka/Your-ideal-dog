import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
        path: 'change-design',
        loadChildren: './main-menu/add-features-buttons/change-design/change-design.module#ChangeDesignModule'
    },
    {
        path: 'comment-the-project',
        loadChildren: './main-menu/add-features-buttons/comment-the-project/comment-the-project.module#CommentTheProjectModule'
    },
    {
        path: '',
        redirectTo: 'start-window',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    declarations: [  ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }