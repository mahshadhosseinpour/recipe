import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecipeModule } from './recipes/recipes.module';
import { AppRoutingModule } from './app.routes';
import { CollectionModule } from './collection/collection.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RecipeModule,
    AppRoutingModule,
    CollectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
