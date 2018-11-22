import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoadingService } from 'src/app/core/loading/loading.service';
import { DesignColorService } from 'src/app/core/design-color/design-color.service';
import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';

import { WorkingWindow } from 'src/app/classes/workingWindow';

@Component({
    selector: 'comment-the-project',
    templateUrl: './comment-the-project.component.html',
    styleUrls: ['./comment-the-project.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentTheProjectComponent extends WorkingWindow implements OnInit {
    public commentForm: FormGroup;

    constructor(
        loading: LoadingService,
        designColor: DesignColorService,
        localStorage: LocalStorageService,
        cdRef: ChangeDetectorRef,
        private formBuilder: FormBuilder) {
            super(loading, designColor, localStorage, cdRef, 0);

            this.commentForm = this.formBuilder.group({
                fullName: ['', Validators.required],
                country: ['', Validators.required],
                comment: ['', Validators.required]
            });

            // this.commentForm.valueChanges.subscribe(value => console.log(value));
            // this.commentForm.statusChanges.subscribe(status => console.log(status));
        }

    ngOnInit(): void {
        this.initColorClasses();
        this.showContent(1000);
    }
}