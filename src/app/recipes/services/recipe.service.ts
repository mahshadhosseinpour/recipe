import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ReceipeService {
    constructor() { }

    public recipes: Recipe[] = [
        {
            id: 1,
            name: 'Pasta Carbonara',
            description: 'A classic Italian pasta dish with eggs, cheese, and bacon.',
            imageUrl: 'https://picsum.photos/200?random=1'
        },
        {
            id: 2,
            name: 'Chicken Curry',
            description: 'A delicious Indian chicken curry with aromatic spices.',
            imageUrl: 'https://picsum.photos/200?random=2'
        }, 
        {
            id: 3,
            name: 'Sushi Roll',
            description: 'Assorted sushi rolls with fresh fish and vegetables.',
            imageUrl: 'https://picsum.photos/200?random=3'
        }
        ,
        {
            id: 4,
            name: 'Caesar Salad',
            description: 'Classic Caesar salad with romaine lettuce, croutons, and parmesan cheese.',
            imageUrl: 'https://picsum.photos/200?random=4'
        }
        ,
        {
            id: 5,
            name: 'Chocolate Brownie',
            description: 'Decadent chocolate brownie served with ice cream.',
            imageUrl: 'https://picsum.photos/200?random=5'
        }
        ,
        {
            id: 6,
            name: 'Hawaiian Burger',
            description: 'Burger with grilled pineapple, ham, and cheese.',
            imageUrl: 'https://picsum.photos/200?random=6'
        }
        ,
        {
            id: 7,
            name: 'Pasta Carbonara',
            description: 'Italian pasta dish with eggs, cheese, bacon, and black pepper.',
            imageUrl: 'https://picsum.photos/200?random=7'
        }
        ,
        {
            id: 8,
            name: 'Taco Platter',
            description: 'Assorted tacos with various fillings and toppings.',
            imageUrl: 'https://picsum.photos/200?random=8'
        }
        ,
        {
            id: 9,
            name: 'Fruit Salad',
            description: 'Fresh fruit salad with a mix of seasonal fruits.',
            imageUrl: 'https://picsum.photos/200?random=9'
        }
        ,
        {
            id: 10,
            name: 'Steak with Mashed Potatoes',
            description: 'Juicy steak served with creamy mashed potatoes.',
            imageUrl: 'https://picsum.photos/200?random=10'
        }

    ];

    getRecipes(): Observable<Recipe[]> {
        return of(this.recipes);
    }
}