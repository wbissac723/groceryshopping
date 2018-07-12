import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery-form',
  templateUrl: './grocery-form.component.html',
  styleUrls: ['./grocery-form.component.css']
})
export class GroceryFormComponent implements OnInit {

  public isSubmitting = false;

  constructor() { }

  ngOnInit() {
  }

  addGroceryItem() {
    this.isSubmitting = true;
  }

}
