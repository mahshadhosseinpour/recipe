import { Component, OnInit } from '@angular/core';
import { ReceipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';
import { Router } from '@angular/router';

@Component({
    templateUrl: './recipe.page.html',
})

export class RecipePage implements OnInit {



    constructor(private recipeService: ReceipeService, private router: Router) { }

    foodList: Recipe[];
    isLoading: boolean = true;

    ngOnInit() {
        this.recipeService.getRecipes().subscribe({
            next: (res) => {
                this.foodList = res;
            },
            error: (er) => {
            }, 
            complete: () => {
                setTimeout(() => {
                    this.isLoading = false;
                }, 300);
            }
        })
    }

    filterItems(e: Recipe[]) {
        this.foodList = e;
    }

    showMyRecipes() {
        this.router.navigate(['myrecipes'])
    }
}