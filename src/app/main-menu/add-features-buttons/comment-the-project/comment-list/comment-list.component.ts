import { Component } from '@angular/core';

@Component({
    selector: 'comment-list',
    templateUrl: './comment-list.component.html',
    styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent {
    public allComments: any[];
    public commentSets: any[];
    public currentCommentSetIndex: number;
    public currentCommentSet: any[];

    constructor() {
        this.allComments = new Array(16).fill({
            fullName: 'Roman Aleksanov',
            country: 'Belarus',
            text: 'The best!'
        });
        this.commentSets = [];

        this.initCommentSets();
        this.currentCommentSetIndex = 0;
        this.currentCommentSet = this.commentSets[this.currentCommentSetIndex];
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

    private initCommentSets(): void {
        const commentsCount = this.allComments.length;

        for (let i = 0; i <= commentsCount; i += 5) {
            if (i + 5 > commentsCount) {
                this.commentSets.push(this.allComments.slice(i, commentsCount));
                break;
            }

            this.commentSets.push(this.allComments.slice(i, i + 5));
        }
    }
}