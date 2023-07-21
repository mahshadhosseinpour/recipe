import { Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { RecipeModule } from "./modules/recipes/recipes.module";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'recipe'
    },
    {
        path: 'recipe',
        loadChildren: () => RecipeModule
    }
]



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
