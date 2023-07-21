import { Component } from '@angular/core';
import { CardDirective } from 'src/app/modules/recipes/directive/card.directive';
import { Recipe } from 'src/app/modules/recipes/models/recipe.model';
import { ReceipeService } from 'src/app/modules/recipes/services/recipe.service';
import { LocalStorageService } from 'src/app/modules/recipes/services/storage.service';

@Component({
  selector: 'hp-card',
  templateUrl: './card.component.html',
  providers: [{ provide: CardDirective, useExisting: CardComponent }]
})
export class CardComponent extends CardDirective<any> {
  constructor(
    private recipeService: ReceipeService,
    private localStorageService: LocalStorageService
  ) {
    super();
  }

  isSave: boolean = false;
  recipe: Recipe | undefined;

  ngOnInit() {
    this.localStorageService.getRecipes().subscribe((savedRecipes) => {
      const foundRecipe = this.recipeService.recipes.find(recipe => recipe.id === this.id);
      if (foundRecipe) {
        this.isSave = !!savedRecipes.find((recipe) => recipe.id === this.id);
        foundRecipe.isSaved = this.isSave;
      }
    });
  }

  saveCollection() {
    this.isSave = !this.isSave;
    const foundRecipe = this.recipeService.recipes.find(recipe => recipe.id === this.id);
    if (foundRecipe) {
      foundRecipe.isSaved = this.isSave;
      this.toggleSave(foundRecipe);
    }
  }

  toggleSave(recipe: Recipe): void {
    this.localStorageService.toggleSaveRecipe(recipe);
  }
}
