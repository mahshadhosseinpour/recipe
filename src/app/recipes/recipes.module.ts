import { NgModule } from '@angular/core';
import { RecipePage } from './pages/recipe.page';
import { ReceipeService } from './services/recipe.service';

@NgModule({
    imports: [],
    exports: [],
    declarations: [RecipePage],
    providers: [ReceipeService],
})
export class RecipeModule { }
