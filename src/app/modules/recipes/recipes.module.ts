import { NgModule } from '@angular/core';
import { RecipePage } from './pages/recipe.page';
import { ReceipeService } from './services/recipe.service';
 
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from 'src/app/components/search/search.component';
import { CardComponent } from 'src/app/components/card/card.component';


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
