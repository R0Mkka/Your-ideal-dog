import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import { LoadingService } from 'src/app/core/loading/loading.service';
import { DesignColorService } from 'src/app/core/design-color/design-color.service';
import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';
import { HttpService } from 'src/app/core/http/http.service';

import { WorkingWindow } from 'src/app/classes/workingWindow';
import { IBreed } from 'src/app/dataTypes/breed';
import { IQuestion } from 'src/app/dataTypes/question';
import { questions } from './test.config';

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
    public currentQuestion: IQuestion;
    private currentQuestionIndex: number;

    constructor(
        loading: LoadingService,
        designColor: DesignColorService,
        localStorage: LocalStorageService,
        cdRef: ChangeDetectorRef,
        private http: HttpService,
        private router: Router) {
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

        questions.forEach((question: IQuestion) => {
            if (question.chosenAnswer !== -1) {
                answersCount++;
            }
        });

        if (answersCount !== questions.length) {
            if (confirm(`Вы ответили только на ${answersCount}/${questions.length} вопросов.\nХотите продолжить?`)) {
                this.goToResultsPage();
            }
        } else {
            this.goToResultsPage();
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
        questions.forEach((question: IQuestion) => {
            question.chosenAnswer = -1;
        });
    }

    private checkQuestionStatus(): void {
        this.isFirstQuestion = this.currentQuestionIndex === 0;
        this.isLastQuestion = this.currentQuestionIndex === questions.length - 1;
    }

    private goToResultsPage(): void {
        this.http.getResults(questions).subscribe((breeds: IBreed[]) => {
            const sortedBreeds = breeds.sort((breed1: IBreed, breed2: IBreed) => {
                return breed2.points - breed1.points;
            });
            
            sessionStorage.setItem('result', JSON.stringify(sortedBreeds.slice(0, 5)));

            this.clearAnswers();
            this.router.navigate(['/main-menu/pick-the-perfect-breed/test/result']);
        });
    }
}