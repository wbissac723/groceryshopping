import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { GroceryItem } from '../../models/grocery-item.model';


@Injectable()
export class GroceryService {
    private baseURL = 'https://node-grocery-api.herokuapp.com/api/';

    constructor(private http: HttpClient) { }

    getGroceries(): Observable<any> {
        return this.http.get(this.baseURL + 'groceries');
    }

    addGroceryItem(body: GroceryItem): Observable<any> {
        return this.http.post(this.baseURL + 'groceries', body);

    }
}
