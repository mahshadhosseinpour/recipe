import { Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { RecipePage } from "./pages/recipes/recipe.page";
import { MyRecipePage } from "./pages/my-recipes/my-recipes.page";
 

const routes: Routes = [
    {
        path:'',
        component:RecipePage
    },
    {
        path:'myrecipes',
        component:MyRecipePage
    }
]
   



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipesRoutingModule { }
