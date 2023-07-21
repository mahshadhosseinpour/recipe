import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { LocalStorageService } from '../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './my-recipes.page.html'
})

export class MyRecipePage implements OnInit {
  constructor(private storageService: LocalStorageService, private router: Router) { }

  foodList: Recipe[];

  ngOnInit() {
    this.storageService.getRecipes().subscribe({
      next: (res) => {
        this.foodList = res;
        console.log("res:", this.foodList);
      },
      error: (er) => {
      }
    })
  }

  showMRecipes() {
    this.router.navigate(['recipe'])
  }
}
