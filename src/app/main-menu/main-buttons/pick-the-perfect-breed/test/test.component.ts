import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';

import { LoadingService } from 'src/app/core/loading/loading.service';
import { DesignColorService } from 'src/app/core/design-color/design-color.service';
import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';
import { HttpService } from 'src/app/core/http/http.service';

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
    public isFirstQuestion: boolean;
    public isLastQuestion: boolean;
    public currentQuestion: Question;
    private currentQuestionIndex: number;

    constructor(
        loading: LoadingService,
        designColor: DesignColorService,
        localStorage: LocalStorageService,
        cdRef: ChangeDetectorRef,
        private http: HttpService) {
            super(loading, designColor, localStorage, cdRef, 0);

            this.isFirstQuestion = true;
            this.isLastQuestion = false;
            this.currentQuestionIndex = 0;
            this.currentQuestion = questions[this.currentQuestionIndex];
        }

    ngOnInit(): void {
        this.initColorClasses();
        this.showContent(1000);
    }

    public setChosenAnswer(answerIndex: number): void {
        if (questions[this.currentQuestionIndex].chosenAnswer === answerIndex) {
            questions[this.currentQuestionIndex].chosenAnswer = -1;
        } else {    
            questions[this.currentQuestionIndex].chosenAnswer = answerIndex;
        }  
    }

    public prevQuestion(): void {
        if (this.currentQuestionIndex - 1 >= 0) {
            this.currentQuestion = questions[--this.currentQuestionIndex];
        }

        this.checkQuestionStatus();
    }

    public nextQuestion(): void {
        if (this.currentQuestionIndex + 1 <= questions.length - 1) {
            this.currentQuestion = questions[++this.currentQuestionIndex];
        }

        this.checkQuestionStatus();
    }

    public sendResults(): void {
        let answersCount = 0;

        questions.forEach((question: Question) => {
            if (question.chosenAnswer !== -1) {
                answersCount++;
            }
        });

        if (answersCount !== questions.length) {
            if (confirm(`Вы ответили только на ${answersCount}/${questions.length} вопросов.\nХотите продолжить?`)) {
                this.http.getResults(questions).subscribe(value => console.log(value));
            }
        } else {
            this.http.getResults(questions).subscribe(value => console.log(value));
            alert('Отлично!');
        }
    }

    public confirm(): boolean {
        const message = 'Вы уверены, что хотите уйти? \nВыбранные вами ответы не будут сохранены.';
        const answer = confirm(message);

        if (answer) {
            this.clearAnswers();

            return true;
        }

        history.pushState({}, "", '/main-menu/pick-the-perfect-breed/test');

        return false;
    }

    private clearAnswers(): void {
        questions.forEach((question: Question) => {
            question.chosenAnswer = -1;
        });
    }

    private checkQuestionStatus(): void {
        this.isFirstQuestion = this.currentQuestionIndex === 0;
        this.isLastQuestion = this.currentQuestionIndex === questions.length - 1;
    }
}