import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { HttpService } from 'src/app/core/http/http.service';

import { ITextComment } from 'src/app/dataTypes/textComment';

@Component({
    selector: 'comment-list',
    templateUrl: './comment-list.component.html',
    styleUrls: ['./comment-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentListComponent implements OnInit {
    @Output() public close: EventEmitter<null>;

    public isEmptyList: boolean;
    public allComments: ITextComment[];
    public commentSets: Array<ITextComment[]>;
    public currentCommentSetIndex: number;
    public currentCommentSet: ITextComment[];

    constructor(
        private http: HttpService,
        private cdRef: ChangeDetectorRef) {
            this.close = new EventEmitter<null>();
        }

    ngOnInit(): void {
        this.initAllComments();
    }

    public nextSet(): void {
        if (this.currentCommentSetIndex + 1 <= this.commentSets.length - 1) {
            this.currentCommentSet = this.commentSets[++this.currentCommentSetIndex];
        } else {
            this.currentCommentSetIndex = 0;
            this.currentCommentSet = this.commentSets[this.currentCommentSetIndex];
        }
    }

    public prevSet(): void {
        if (this.currentCommentSetIndex - 1 >= 0) {
            this.currentCommentSet = this.commentSets[--this.currentCommentSetIndex];
        } else {
            this.currentCommentSetIndex = this.commentSets.length - 1;
            this.currentCommentSet = this.commentSets[this.currentCommentSetIndex];
        }
    }

    public goToCommentSet(id: number): void {
        this.currentCommentSetIndex = id;
        this.currentCommentSet = this.commentSets[this.currentCommentSetIndex];
    }

    public closeComments(): void {
        this.close.emit();
    }

    private initAllComments(): void {
        this.http.getCommentList().subscribe({
            next: (comments: ITextComment[]) => {
                this.allComments = comments;
                this.isEmptyList = this.allComments.length === 0;
            },
            error: (err) => {
                console.error(err);
            },
            complete: () => {
                this.initCommentSets();
                this.currentCommentSetIndex = 0;
                this.currentCommentSet = this.commentSets[this.currentCommentSetIndex];

                if (!this.cdRef['destroyed']) {
                    this.cdRef.detectChanges();
                }
            }
        })
    }

    private initCommentSets(): void {
        const commentsCount = this.allComments.length;

        this.commentSets = [];

        for (let i = 0; i < commentsCount; i += 5) {
            if (i + 5 > commentsCount) {
                this.commentSets.push(this.allComments.slice(i, commentsCount));
                break;
            }

            this.commentSets.push(this.allComments.slice(i, i + 5));
        }
    }
}