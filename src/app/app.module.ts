import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GroceryFormComponent } from './grocery-form/grocery-form.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { GroceryService } from './services/grocery-api/grocery.service';


@NgModule({
  declarations: [
    AppComponent,
    GroceryFormComponent,
    GroceryListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    GroceryService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
