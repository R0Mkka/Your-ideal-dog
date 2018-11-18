import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const addFeaturesButtonsRoutes: Routes = [
    {
        path: 'change-design',
        loadChildren: './change-design/change-design.module#ChangeDesignModule'
    },
    {
        path: 'comment-the-project',
        loadChildren: './comment-the-project/comment-the-project.module#CommentTheProjectModule'
    }
];

@NgModule({
    imports: [ RouterModule.forChild(addFeaturesButtonsRoutes) ],
    exports: [ RouterModule ]
})
export class AddFeaturesButtonsRoutingModule { }