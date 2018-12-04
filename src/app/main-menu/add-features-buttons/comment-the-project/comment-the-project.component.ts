import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoadingService } from 'src/app/core/loading/loading.service';
import { DesignColorService } from 'src/app/core/design-color/design-color.service';
import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';
import { HttpService } from 'src/app/core/http/http.service';

import { WorkingWindow } from 'src/app/classes/workingWindow';
import { TextComment } from 'src/app/dataTypes/textComment';

@Component({
    selector: 'comment-the-project',
    templateUrl: './comment-the-project.component.html',
    styleUrls: ['./comment-the-project.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentTheProjectComponent extends WorkingWindow implements OnInit {
    public commentForm: FormGroup;
    private isValid: boolean;

    constructor(
        loading: LoadingService,
        designColor: DesignColorService,
        localStorage: LocalStorageService,
        cdRef: ChangeDetectorRef,
        private http: HttpService,
        private formBuilder: FormBuilder) {
            super(loading, designColor, localStorage, cdRef, 0);

            this.commentForm = this.formBuilder.group({
                fullName: ['', Validators.required],
                country: ['', Validators.required],
                comment: ['', Validators.required]
            });
        }

    ngOnInit(): void {
        this.initColorClasses();
        this.showContent(1000);
        this.subscribeOnFormStatus();
    }

    public onSubmit(comment: TextComment): void {
        if (this.isValid) {
            this.http.addNewComment(comment).subscribe();

            this.commentForm.patchValue({
                fullName: '',
                country: '',
                comment: ''
            });

            alert('Комментарий успешно отправлен! Спасибо!');
        } else {
            alert('Все поля должны быть заполнены!');
        }        
    }

    private subscribeOnFormStatus(): void {
        this.commentForm.statusChanges.subscribe((status: string) => {
            this.isValid = status === 'VALID';
        });
    }
}