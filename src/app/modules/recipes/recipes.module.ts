import { NgModule } from '@angular/core';
import { RecipePage } from './pages/recipe.page';
import { ReceipeService } from './services/recipe.service';
import { SearchComponent } from './components/search/search.component';
import { CardComponent } from './components/card/card.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


const components:any[]=[
    SearchComponent,
    CardComponent
]

const pages :any[]=[
    RecipePage
]

@NgModule({
    imports: [CommonModule,ReactiveFormsModule],
    exports: [],
    declarations: [...pages,...components],
    providers: [ReceipeService],
      
})
export class RecipeModule { }
