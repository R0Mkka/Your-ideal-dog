import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentTheProjectRoutingModule } from './comment-the-project-routing.module';
import { CommentTheProjectComponent } from './comment-the-project.component';

@NgModule({
    imports: [
        CommonModule,
        CommentTheProjectRoutingModule
    ],
    declarations: [
        CommentTheProjectComponent
    ],
    exports: [ ]
})
export class CommentTheProjectModule { }