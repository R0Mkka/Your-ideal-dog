import { Component, ChangeDetectionStrategy, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';

import { IQuestion } from 'src/app/dataTypes/question';

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {
    @Input() questions: IQuestion[];
    @Output() changeQuestion: EventEmitter<number>;
    
    public isOpen: boolean;
    public colorClasses: any;

    constructor(private localStorage: LocalStorageService) {
        this.changeQuestion = new EventEmitter<number>();
        this.isOpen = false;
    }

    public ngOnInit(): void {
        this.initColorClasses();
    }

    public toggle(): void {
        this.isOpen = !this.isOpen;
    }

    public goToQuestion(questionId: number): void {
        this.changeQuestion.emit(questionId);
    }

    private initColorClasses(): void {
        this.colorClasses = JSON.parse(this.localStorage.get('designColor'));
    }
}