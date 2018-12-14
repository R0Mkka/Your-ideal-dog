import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';
import { CommentTheProjectRoutingModule } from './comment-the-project-routing.module';

import { CommentTheProjectComponent } from './comment-the-project.component';
import { CommentListComponent } from './comment-list/comment-list.component';

@NgModule({
    imports: [
        ReactiveFormsModule,
        SharedModulesModule,
        CommentTheProjectRoutingModule
    ],
    declarations: [
        CommentTheProjectComponent,
        CommentListComponent
    ],
    exports: [ ]
})
export class CommentTheProjectModule { }