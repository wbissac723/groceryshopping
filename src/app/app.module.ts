import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { GroceryFormComponent } from './grocery-form/grocery-form.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';

// Services
import { GroceryService } from './services/grocery-api/grocery.service';


@NgModule({
  declarations: [
    AppComponent,
    GroceryFormComponent,
    GroceryListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ GroceryService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
