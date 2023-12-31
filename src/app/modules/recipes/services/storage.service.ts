import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { ReceipeService } from './recipe.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  private readonly localStorageKey = 'savedRecipes';
  private savedRecipes: Recipe[] = [];
  private savedRecipesSubject: BehaviorSubject<Recipe[]> = new BehaviorSubject<Recipe[]>([]);

  constructor(private recipeService: ReceipeService) {
    this.loadSavedRecipes();
  }

  public loadSavedRecipes(): void {
    const savedRecipesJson = localStorage.getItem(this.localStorageKey);
    if (savedRecipesJson) {
      this.savedRecipes = JSON.parse(savedRecipesJson);
    }
    this.recipeService.recipes.forEach((recipe) => {
      const savedRecipe = this.savedRecipes.find((r) => r.id === recipe.id);
      recipe.isSaved = !!savedRecipe;
    });

    this.savedRecipesSubject.next([...this.savedRecipes]);
  }

  private saveRecipesToLocalStorage(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.savedRecipes));
  }

  toggleSaveRecipe(recipe: Recipe): void {
    const index = this.savedRecipes.findIndex((r) => r.id === recipe.id);
    if (index > -1) {
      this.savedRecipes.splice(index, 1);
    } else {
      this.savedRecipes.push(recipe);
    }

    recipe.isSaved = !recipe.isSaved;
    this.saveRecipesToLocalStorage();
    
    this.savedRecipesSubject.next([...this.savedRecipes]);
  }

  getRecipes(): Observable<Recipe[]> {
    return this.savedRecipesSubject.asObservable();
  }
}
