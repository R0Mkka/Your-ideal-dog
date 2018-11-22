import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';
import { CommentTheProjectRoutingModule } from './comment-the-project-routing.module';

import { CommentTheProjectComponent } from './comment-the-project.component';

@NgModule({
    imports: [
        ReactiveFormsModule,
        SharedModulesModule,
        CommentTheProjectRoutingModule
    ],
    declarations: [
        CommentTheProjectComponent
    ],
    exports: [ ]
})
export class CommentTheProjectModule { }