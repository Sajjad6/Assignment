import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextInputAutocompleteModule } from 'angular-text-input-autocomplete';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomComponent } from './custom/custom.component';
import { TextareaComponent } from './textarea/textarea.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomComponent,
    TextareaComponent
  ],
  entryComponents: [CustomComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    TextInputAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
