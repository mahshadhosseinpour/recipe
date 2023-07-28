import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { LocalStorageService } from '../../services/storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  templateUrl: './my-recipes.page.html'
})

export class MyRecipePage implements OnInit {

  constructor(private storageService: LocalStorageService,
    private router: Router,
    private location: Location,
    private route: ActivatedRoute) { }

  foodList: Recipe[];

  ngOnInit() {
    this.storageService.getRecipes().subscribe({
      next: (res) => {
        this.foodList = res;
      },
      error: (er) => {
      }
    })


    console.log("location :", this.location.getState())

    this.route.queryParamMap.subscribe({
      next: ({params}:any) => {
        console.log("route :", params)
      }
    })

  }

  showMRecipes() {
    this.router.navigate(['recipe'])
  }
}
