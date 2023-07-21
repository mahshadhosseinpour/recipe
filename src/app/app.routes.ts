import { Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { RecipePage } from "./modules/recipes/pages/recipe.page";
import { CollectionPage } from "./modules/collection/pages/collection.page";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'recipe'
    },
    {
        path: 'recipe',
        component: RecipePage
    },
    {
        path:'collection',
        component:CollectionPage
    }
]



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
