import { Component, OnInit } from '@angular/core';
import { ReceipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe.model';
import { Router } from '@angular/router';

@Component({
    templateUrl: './recipe.page.html',
})

export class RecipePage implements OnInit {



    constructor(private recipeService: ReceipeService, private router: Router) { }

    foodList: Recipe[];

    ngOnInit() {
        this.recipeService.getRecipes().subscribe({
            next: (res) => {
                this.foodList = res;
            },
            error: (er) => {
            }
        })
    }

    filterItems(e: Recipe[]) {
        this.foodList = e;
        console.log("this.foodList :", this.foodList);
    }

    showMyRecipes() {
        this.router.navigate(['collection'])
    }
}