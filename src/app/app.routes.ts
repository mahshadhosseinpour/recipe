import { Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { RecipeModule } from "./modules/recipes/recipes.module";
import { NotFoundComponent } from "./components/404/404.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'recipe'
    },
    {
        path: 'recipe',
        loadChildren: () => RecipeModule
    },
    {
        path:'**',
        redirectTo: '404'   
    },
    {
        path:'404',
        component:NotFoundComponent
    }
]



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
