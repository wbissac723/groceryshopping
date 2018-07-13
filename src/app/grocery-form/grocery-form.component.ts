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

  constructor(private fb: FormBuilder, private groceryStoreService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.groceryForm = this.fb.group({ name: '' });
  }

  get groceryItem() {
    return this.groceryForm.get('name').value;
  }

  addGroceryItem(): void {
    this.groceryList.push(this.groceryItem);
    this.groceryForm.reset();
  }

  createGroceryList(): void {

  }

}
