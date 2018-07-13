import { Injectable } from '@angular/core';

@Injectable()
export class GroceryStoreService {
    private _groceryList = [];

    public get groceryList() {
        return this._groceryList;
    }

    public set groceryList(value) {
        this._groceryList = value;
    }

}
