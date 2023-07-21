import { Component, OnInit } from '@angular/core';
import { ReceipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe.model';

@Component({
    templateUrl: './recipe.page.html',
})

export class RecipePage implements OnInit {

  

    constructor(private recipeService: ReceipeService) { }
    
    foodList: Recipe[];

    ngOnInit() {
        this.recipeService.getRecipes().subscribe({
            next: (res) => {
               this.foodList=res;
            },
            error:(er)=>{
            }
        })
    }

    filterItems(e:Recipe[]){
        this.foodList = e;
        console.log("this.foodList :",this.foodList);
    }
}