import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommentTheProjectComponent } from './comment-the-project.component';

const commentTheProjectRoutes: Routes = [
    {
        path: '',
        component: CommentTheProjectComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(commentTheProjectRoutes) ],
    exports: [ RouterModule ]
})
export class CommentTheProjectRoutingModule { }