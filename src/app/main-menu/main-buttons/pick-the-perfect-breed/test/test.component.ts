import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { LoadingService } from 'src/app/core/loading/loading.service';
import { DesignColorService } from 'src/app/core/design-color/design-color.service';
import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';
import { HttpService } from 'src/app/core/http/http.service';
import { AlertService } from 'src/app/shared-modules/alert/alert.service';

import { WorkingWindow } from 'src/app/classes/workingWindow';
import { IBreed } from 'src/app/dataTypes/breed';
import { IQuestion } from 'src/app/dataTypes/question';
import { ITableItem } from 'src/app/dataTypes/tableItem';
import { questionList, Alerts } from './test.config';

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
    public questions: IQuestion[];
    public isReadyDisbled: boolean;
    private currentQuestionIndex: number;
    private isTestReady: boolean;
    private testStartTime: number;

    constructor(
        loading: LoadingService,
        designColor: DesignColorService,
        localStorage: LocalStorageService,
        cdRef: ChangeDetectorRef,
        private http: HttpService,
        private router: Router,
        private alert: AlertService) {
            super(loading, designColor, localStorage, cdRef, 0);

            this.isFirstQuestion = true;
            this.isLastQuestion = false;
            this.isReadyDisbled = false;
            this.currentQuestionIndex = 0;
            this.questions = questionList;
            this.currentQuestion = this.questions[this.currentQuestionIndex];
            this.isTestReady = false;
        }

    ngOnInit(): void {
        this.initColorClasses();
        this.showContent(1000);
        this.subscribeOnNavigateAway();
        this.initTestStartTime();
    }

    public setChosenAnswer(answerIndex: number): void {
        let chosen = this.questions[this.currentQuestionIndex].chosenAnswer;

        if (chosen instanceof Array) {
            for (let i = 0; i < chosen.length; i++) {
                if (chosen[i] === answerIndex) {
                    chosen.splice(i, 1);

                    this.questions[this.currentQuestionIndex].chosenAnswer = chosen;
                    return;
                }
            }

            if (chosen.length === 2) {
                chosen.shift();  
            }

            chosen.push(answerIndex);
        } else {
            chosen = (chosen === answerIndex) ? -1 : answerIndex;
        }

        this.questions[this.currentQuestionIndex].chosenAnswer = chosen;
    }

    public addClass(index: number): boolean {
        if (this.currentQuestion.chosenAnswer instanceof Array) {
            return Boolean(~this.currentQuestion.chosenAnswer.indexOf(index));
        }

        return index === this.currentQuestion.chosenAnswer;
    }

    public changeQuestion(questionId: number) {
        this.currentQuestion = this.questions[questionId - 1];
        this.currentQuestionIndex = questionId - 1;

        this.checkQuestionStatus();
    }

    public prevQuestion(): void {
        if (this.currentQuestionIndex - 1 >= 0) {
            this.currentQuestion = this.questions[--this.currentQuestionIndex];
        }

        this.checkQuestionStatus();
    }

    public nextQuestion(): void {
        if (this.currentQuestionIndex + 1 <= this.questions.length - 1) {
            this.currentQuestion = this.questions[++this.currentQuestionIndex];
        }

        this.checkQuestionStatus();
    }

    public finishTest(): void {
        if (!this.isReadyDisbled) {
            const answersAmount = this.countAnswers();

            if (answersAmount < 5) {
                this.alert.setSettings(Alerts.fewAnswers);
                this.alert.show();

                return;
            }

            if (answersAmount !== this.questions.length) {
                Alerts.notAllAnswers.message = `Вы ответили только на ${answersAmount}/${this.questions.length} вопросов.\nХотите продолжить?`;
                this.alert.setSettings(Alerts.notAllAnswers);
                this.alert.show();

                const sub = this.alert.navigateAway$.subscribe((answer: boolean) => {
                    if (answer) {
                        this.goToResultsPage();
                    }

                    sub.unsubscribe();
                });
            } else {
                this.goToResultsPage();
            }
        }
    }

    public canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
        if (this.isTestReady) {
            return true;
        }

        this.alert.setSettings(Alerts.goAway);
        this.alert.show();
        
        return this.alert.navigateAway$;
    }

    private countAnswers(): number {
        let answersAmount = 0;
        
        this.questions.forEach((question: IQuestion) => {
            if (question.chosenAnswer instanceof Array) {
                if (question.chosenAnswer.length > 0) {
                    answersAmount++;
                }
            } else {
                if (question.chosenAnswer !== -1) {
                    answersAmount++;
                }
            }
        });

        return answersAmount;
    }

    private clearAnswers(): void {
        this.questions.forEach((question: IQuestion) => {
            if (question.chosenAnswer instanceof Array) {
                question.chosenAnswer = [];
            } else {
                question.chosenAnswer = -1;
            }
        });
    }

    private checkQuestionStatus(): void {
        this.isFirstQuestion = this.currentQuestionIndex === 0;
        this.isLastQuestion = this.currentQuestionIndex === this.questions.length - 1;
    }

    private goToResultsPage(): void {
        this.isReadyDisbled = true;
        this.isTestReady = true;

        this.http.getTestResults(this.questions).subscribe({
            next: (breeds: IBreed[]) => {
                const filteredBreeds = this.getFilteredBreeds(breeds);
                const sortedBreeds = this.getSortedBreeds(filteredBreeds);

                this.addNewResult(sortedBreeds);
                
                sessionStorage.setItem('result', JSON.stringify(sortedBreeds.slice(0, 5)));
    
                this.clearAnswers();
                this.router.navigate(['/main-menu/pick-the-perfect-breed/test/result']);
            },
            error: (err) => {
                console.error(err);

                this.alert.setSettings(Alerts.serverIsNotWorking);
                this.alert.show();

                this.isReadyDisbled = false;
            },
            complete: () => {
                this.isReadyDisbled = false;
            }
        });
    }

    private getFilteredBreeds(breeds: IBreed[]): IBreed[] {
        return breeds.filter((breed: IBreed) => {
            return breed.points > -1;
        });
    }

    private getSortedBreeds(breeds: IBreed[]): IBreed[] {
        return breeds.sort((breed1: IBreed, breed2: IBreed) => {
            return breed2.points - breed1.points;
        });
    }

    private addNewResult(sortedBreeds: IBreed[]): void {
        const localDate = new Date();

        const newListItem: ITableItem = {
            breeds: sortedBreeds.slice(0, 5),
            answersAmount: this.countAnswers(),
            testTime: performance.now() - this.testStartTime,
            date: localDate.toLocaleDateString(),
            time: localDate.toLocaleTimeString(),
            rating: -1
        }

        this.http.addNewResultsTableItem(newListItem).subscribe();
    }

    private subscribeOnNavigateAway(): void {
        this.alert.navigateAway$.subscribe((answer: boolean) => {
            if (!answer) history.pushState({}, "", '/main-menu/pick-the-perfect-breed/test');
        });
    }

    private initTestStartTime(): void {
        this.testStartTime = performance.now();
    }
}