import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Recipe } from '../../models/recipe.model';
import { ReceipeService } from '../../services/recipe.service';

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


    ngOnInit() {
      this.searchForm = this.formBuilder.control('');
      this.searchForm.valueChanges.subscribe((query: string) => {
        this.filterRecipes(query);
      });
    }
  
    filterRecipes(query: string): void {
      console.log("query :",query);
      this.filteredRecipes = this.recipeService.recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(query.toLowerCase())
      );
      this.filterItems.emit(this.filteredRecipes);
    }
}