import { Component, OnInit } from '@angular/core';
import { CardDirective } from '../../directive/card.directive';
import { ReceipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';
import { LocalStorageService } from '../../services/storage.service';
 

@Component({
    selector: 'hp-card',
    templateUrl: './card.component.html',
    providers: [{ provide: CardDirective, useExisting: CardComponent }]
})

export class CardComponent extends CardDirective<any> {
    constructor(private recipeService: ReceipeService,
        private localStorageService: LocalStorageService) {
        super()
    }


    isSave: boolean = false;
    recipe: Recipe | undefined;

    ngOnInit() {
        this.recipe = this.recipeService.recipes.find(recipe => recipe.id === this.id);
        if (this.recipe) {
            this.isSave = this.recipe.isSaved;
        }
    }

    saveCollection() {
        this.isSave = !this.isSave;
        if (this.recipe) {
            this.recipe.isSaved = this.isSave;
            this.toggleSave(this.recipe);
        }
    }

    toggleSave(recipe: Recipe): void {
        this.localStorageService.toggleSaveRecipe(recipe);
    }
}