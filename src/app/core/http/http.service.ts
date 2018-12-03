import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Breed } from '../../dataTypes/breed';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private http: HttpClient) {}

    public getBreeds(): Observable<Breed[]> {
        return this.http.get<Breed[]>('http://localhost:8000/api/dog-breeds');
    }

    public getBreedDescription(breedName: string): Observable<any> {
        return this.http.get<any>(`http://localhost:8000/api/breeds-descriptions/${breedName}`);
    }
}