import { NgModule } from '@angular/core';
import { CollectionService } from './services/collection.service';
import { CollectionPage } from './pages/collection.page';


@NgModule({
    imports: [],
    exports: [],
    declarations: [CollectionPage],
    providers: [CollectionService],
})
export class CollectionModule { }
