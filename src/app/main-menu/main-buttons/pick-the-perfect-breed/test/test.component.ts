import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';

import { LoadingService } from 'src/app/core/loading/loading.service';
import { DesignColorService } from 'src/app/core/design-color/design-color.service';
import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';

import { WorkingWindow } from 'src/app/classes/workingWindow';
import { Question, questions } from './test.config';

import { canComponentDeactivate } from './close-test.guard';

@Component({
    selector: 'test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent extends WorkingWindow implements OnInit, canComponentDeactivate {
    public currentQuestion: Question;
    private currentQuestionIndex: number;

    constructor(
        loading: LoadingService,
        designColor: DesignColorService,
        localStorage: LocalStorageService,
        cdRef: ChangeDetectorRef) {
            super(loading, designColor, localStorage, cdRef, 0);

            this.currentQuestionIndex = 0;
            this.currentQuestion = questions[this.currentQuestionIndex];
        }

    ngOnInit(): void {
        this.initColorClasses();
        this.showContent(1000);
    }

    public nextQuestion(): void {
        this.currentQuestion = questions[++this.currentQuestionIndex];
    }

    public confirm(): boolean {
        const message = `Вы уверены, что хотите уйти?
                         Выбранные вами ответы не будут сохранены.`;
                         
        const answer = confirm(message);

        if (answer) {
            return true;
        }

        history.pushState({}, "", '/main-menu/pick-the-perfect-breed/test');

        this.loading.hide();
        this.isContentLoaded = true;

        return false;
    }
}