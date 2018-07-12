import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Observable } from 'rxjs/Observable';

import { GroceryService } from '../services/grocery-api/grocery.service';

@Component({
  selector: 'app-grocery-form',
  templateUrl: './grocery-form.component.html',
  styleUrls: ['./grocery-form.component.css']
})
export class GroceryFormComponent implements OnInit {

  groceryForm: FormGroup;
  isSubmitting = false;
  groceryItem;

  constructor(private fb: FormBuilder, private groceryService: GroceryService) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.groceryForm = this.fb.group({ name: '' });
  }

  addGroceryItem() {
    this.isSubmitting = true;
    this.groceryItem = this.groceryForm.get('name').value;

    this.groceryService.addGroceryItem(this.groceryItem)
      .subscribe(
        (result) => this.handleAddGroceryItemSuccess(result),
        (err) => this.handleAddGroceryItemFail(err)
      );

    console.log(`Adding ${this.groceryItem} to the grocery list.`);
  }

  handleAddGroceryItemSuccess(result: any) {
    this.isSubmitting = false;
  }

  handleAddGroceryItemFail(err: any) {
    this.isSubmitting = false;
  }

}
