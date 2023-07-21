import { Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { RecipePage } from "./recipes/pages/recipe.page";
import { RouterModule } from "@angular/router";
import { CollectionPage } from "./collection/pages/collection.page";

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
