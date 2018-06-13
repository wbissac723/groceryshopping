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

  constructor(private groceryService: GroceryService) { }

  ngOnInit() {
    this.getGroceryList();
  }

  getGroceryList(): Subscription {
    return this.groceryService.getGroceries()
      .subscribe(
        (res) => this.groceries = res,
        (err) => console.log(err)
      );
  }
}

