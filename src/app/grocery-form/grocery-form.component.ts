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

  public groceryForm: FormGroup;
  public groceryList = [];
  public groceryItem;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.groceryForm = this.fb.group({ name: '' });
  }

  addGroceryItem() {

    this.groceryItem = this.groceryForm.get('name').value;

    this.groceryList.push(this.groceryItem);
    this.groceryForm.reset();

  }

}
