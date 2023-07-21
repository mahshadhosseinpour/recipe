import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ReceipeService {
    constructor() { }

    private recipes: Recipe[] = [
        {
            id: 1,
            name: 'Pasta Carbonara',
            description: 'A classic Italian pasta dish with eggs, cheese, and bacon.',
            imageUrl: 'https://example.com/pasta_carbonara.jpg'
        },
        {
            id: 2,
            name: 'Chicken Curry',
            description: 'A delicious Indian chicken curry with aromatic spices.',
            imageUrl: 'https://example.com/chicken_curry.jpg'
        }
    ];

    getRecipes(): Observable<Recipe[]> {
        return of(this.recipes);
    }
}