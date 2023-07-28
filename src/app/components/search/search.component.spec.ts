import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';
import { ReceipeService } from 'src/app/modules/recipes/services/recipe.service';
import { Recipe } from 'src/app/modules/recipes/models/recipe.model';
import { of } from 'rxjs';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let recipeService: ReceipeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [SearchComponent],
      providers: [FormBuilder, ReceipeService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    recipeService = TestBed.inject(ReceipeService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should filter recipes correctly when search query changes', () => {
    // Mock recipe data
    const recipes: Recipe[] = [
      {
        id: 1,
        name: 'Test Recipe 1',
        description: 'Test description 1',
        imageUrl: 'https://example.com/image1.jpg',
        isSaved: false,
      },
      {
        id: 2,
        name: 'Test Recipe 2',
        description: 'Test description 2',
        imageUrl: 'https://example.com/image2.jpg',
        isSaved: false,
      },
    ];
    spyOn(recipeService, 'getRecipes').and.returnValue(of(recipes)); 

    // Set the search query
    component.searchForm.setValue('Test');

    // Trigger change detection
    fixture.detectChanges();

    // Expect filteredRecipes to contain only matching recipes
    expect(component.filteredRecipes).toEqual([
      {
        id: 1,
        name: 'Test Recipe 1',
        description: 'Test description 1',
        imageUrl: 'https://example.com/image1.jpg',
        isSaved: false,
      },
    ]);
  });

  it('should emit filtered recipes when search query changes', () => {
    spyOn(component.filterItems, 'emit');

    // Set the search query
    component.searchForm.setValue('Test');

    // Trigger change detection
    fixture.detectChanges();

    // Expect the filterItems event to be emitted with filtered recipes
    expect(component.filterItems.emit).toHaveBeenCalledWith(component.filteredRecipes);
  });
});
