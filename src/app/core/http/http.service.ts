import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IBreed } from '../../dataTypes/breed';
import { IBreedDescription } from '../../dataTypes/breedDescription';
import { IFullBreedInfo } from '../../dataTypes/fullBreedInfo';
import { ITextComment } from '../../dataTypes/textComment';
import { IQuestion } from '../../dataTypes/question';
import { ITableItem } from '../../dataTypes/tableItem';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private dogBreedsUrl: string;
    private breedsDescriptionsUrl: string;
    private favoriteBreedsUrl: string;
    private commentsUrl: string;
    private testResultsUrl: string;
    private resultsTableUrl: string;

    constructor(private http: HttpClient) {
        this.dogBreedsUrl = 'http://localhost:8000/api/dog-breeds';
        this.breedsDescriptionsUrl = 'http://localhost:8000/api/breeds-descriptions';
        this.favoriteBreedsUrl = 'http://localhost:8000/api/favorite-breeds';
        this.commentsUrl = 'http://localhost:8000/api/comments';
        this.testResultsUrl = 'http://localhost:8000/api/get-results';
        this.resultsTableUrl = 'http://localhost:8000/api/results-list';
    }

    public getBreeds(): Observable<IBreed[]> {
        return this.http.get<IBreed[]>(this.dogBreedsUrl);
    }

    public getBreedDescription(breedName: string): Observable<IBreedDescription> {
        return this.http.get<IBreedDescription>(`${this.breedsDescriptionsUrl}/${breedName}`);
    }

    public addToFavoriteBreeds(breed: IBreed, description: IBreedDescription): Observable<IFullBreedInfo> {
        const fullInfo: IFullBreedInfo = {
            name: breed.name,
            breed,
            description
        }

        return this.http.post<IFullBreedInfo>(this.favoriteBreedsUrl, fullInfo);
    }

    public removeFromFavoriteBreeds(breedName: string): Observable<IFullBreedInfo> {
        return this.http.delete<IFullBreedInfo>(`${this.favoriteBreedsUrl}/${breedName}`);
    }

    public getFavoriteBreeds(): Observable<IFullBreedInfo[]> {
        return this.http.get<IFullBreedInfo[]>(this.favoriteBreedsUrl);
    }

    public addNewComment(comment: ITextComment): Observable<ITextComment> {
        return this.http.post<ITextComment>(this.commentsUrl, comment);
    }

    public getCommentList(): Observable<ITextComment[]> {
        return this.http.get<ITextComment[]>(this.commentsUrl);
    }

    public getTestResults(questions: IQuestion[]): Observable<IBreed[]> {
        return this.http.post<IBreed[]>(this.testResultsUrl, questions);
    }

    public addNewResultsTableItem(obj: ITableItem): Observable<ITableItem> {
        return this.http.post<ITableItem>(this.resultsTableUrl, obj);
    }

    public getResultsTableList(): Observable<ITableItem[]> {
        return this.http.get<ITableItem[]>(this.resultsTableUrl);
    }
}