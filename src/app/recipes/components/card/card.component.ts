import { Component, OnInit } from '@angular/core';
import { CardDirective } from '../../directive/card.directive';
import { ReceipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';

@Component({
    selector: 'hp-card',
    templateUrl: './card.component.html',
    providers: [{ provide: CardDirective, useExisting: CardComponent }]
})

export class CardComponent extends CardDirective<any> {
    constructor(private recipeService: ReceipeService) {
        super()
    }



    ngOnInit() { }

    isSave: boolean = false;

    saveCollection() {
        this.isSave = !this.isSave;
        const foundRecipe = this.recipeService.recipes.find(recipe => recipe.id === this.id);
        if (foundRecipe) {
          foundRecipe.isSaved = this.isSave;
        }
    }

}