import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GroceryFormComponent } from './grocery-form/grocery-form.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';


@NgModule({
  declarations: [
    AppComponent,
    GroceryFormComponent,
    GroceryListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
