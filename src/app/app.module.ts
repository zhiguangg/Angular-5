import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './header/recipes/recipes.component';
import { RecipeListComponent } from './header/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './header/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './header/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './header/shopping-list/shopping-edit/shopping-edit.component';
import { RecipeDetailComponent } from './header/recipes/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeDetailComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
