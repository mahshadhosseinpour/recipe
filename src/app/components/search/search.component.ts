import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Recipe } from 'src/app/modules/recipes/models/recipe.model';
import { ReceipeService } from 'src/app/modules/recipes/services/recipe.service';
 

@Component({
    selector: 'hp-search',
    templateUrl: './search.component.html'
})

export class SearchComponent implements OnInit {
   
    
    constructor(private formBuilder: FormBuilder,private recipeService:ReceipeService) { }
  
    @Output()
    filterItems = new EventEmitter();

    searchForm: FormControl;
    filteredRecipes: Recipe[] = [];
    isLoading: boolean = true;


    ngOnInit() {
      this.searchForm = this.formBuilder.control('');
      this.searchForm.valueChanges.subscribe((query: string) => {
        this.filterRecipes(query);
      });
    }
  
    filterRecipes(query: string): void {
      this.filteredRecipes = this.recipeService.recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(query.toLowerCase())
      );
      this.filterItems.emit(this.filteredRecipes);
    }
}