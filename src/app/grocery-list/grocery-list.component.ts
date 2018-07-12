import { GroceryService } from './../services/grocery-api/grocery.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {
  public groceries = [];
  public isLoading;

  constructor(private groceryService: GroceryService) { }

  ngOnInit() {
    this.getGroceryList();
  }

  getGroceryList(): Subscription {
    this.isLoading = true;
    return this.groceryService.getGroceries()
      .subscribe(
        (result) => this.handleGetGroceryListSuccess(result),
        (err) => this.handleGetGroceryListFailure(err),
        () => this.isLoading = false
      );
  }

  handleGetGroceryListSuccess(result) {
    this.groceries = result;
  }

  handleGetGroceryListFailure(err) {
    console.log(err);
  }
}

