import { NgModule } from '@angular/core';
import { RecipePage } from './pages/recipe.page';
import { ReceipeService } from './services/recipe.service';
import { SearchComponent } from './components/search/search.component';
import { CardComponent } from './components/card/card.component';


const components:any[]=[
    SearchComponent,
    CardComponent
]

const pages :any[]=[
    RecipePage
]

@NgModule({
    imports: [],
    exports: [],
    declarations: [...pages,...components],
    providers: [ReceipeService],
      
})
export class RecipeModule { }
