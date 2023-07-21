import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  private readonly localStorageKey = 'recipes';

  constructor() {}
 
}
