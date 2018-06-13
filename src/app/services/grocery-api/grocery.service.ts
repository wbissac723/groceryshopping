import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class GroceryService {
    private baseURL = 'https://node-grocery-api.herokuapp.com/api/';

    constructor(private http: HttpClient) { }

    getGroceries(): Observable<any> {
        return this.http.get(this.baseURL + 'groceries');
    }
}
