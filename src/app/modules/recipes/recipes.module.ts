import { NgModule } from '@angular/core';
import { RecipePage } from './pages/recipes/recipe.page';
import { ReceipeService } from './services/recipe.service';
 
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from 'src/app/components/search/search.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { RecipesRoutingModule } from './receipe.routes';
import { MyRecipePage } from './pages/my-recipes/my-recipes.page';


const components:any[]=[
    SearchComponent,
    CardComponent
]

const pages :any[]=[
    RecipePage,
    MyRecipePage
]

@NgModule({
    imports: [CommonModule,ReactiveFormsModule,RecipesRoutingModule],
    exports: [],
    declarations: [...pages,...components],
    providers: [ReceipeService],
      
})
export class RecipeModule { }
