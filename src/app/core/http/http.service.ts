import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IBreed } from '../../dataTypes/breed';
import { IBreedDescription } from '../../dataTypes/breedDescription';
import { IFullBreedInfo } from '../../dataTypes/fullBreedInfo';
import { TextComment } from '../../dataTypes/textComment';
import { IQuestion } from '../../dataTypes/question';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private dogBreedsUrl: string;
    private breedsDescriptionsUrl: string;
    private favoriteBreedsUrl: string;
    private commentsUrl: string;
    private resultsUrl: string;

    constructor(private http: HttpClient) {
        this.dogBreedsUrl = 'http://localhost:8000/api/dog-breeds';
        this.breedsDescriptionsUrl = 'http://localhost:8000/api/breeds-descriptions';
        this.favoriteBreedsUrl = 'http://localhost:8000/api/favorite-breeds';
        this.commentsUrl = 'http://localhost:8000/api/comments';
        this.resultsUrl = 'http://localhost:8000/api/get-results';
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

    public addNewComment(comment: TextComment): Observable<TextComment> {
        return this.http.post<TextComment>(this.commentsUrl, comment);
    }

    public getResults(questions: IQuestion[]): Observable<IBreed[]> {
        return this.http.post<IBreed[]>(this.resultsUrl, questions);
    }
}