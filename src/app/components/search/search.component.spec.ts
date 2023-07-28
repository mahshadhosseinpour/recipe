import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';
import { ReceipeService } from 'src/app/modules/recipes/services/recipe.service';
import { Recipe } from 'src/app/modules/recipes/models/recipe.model';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing'; 

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let recipeService: ReceipeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule],
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
  
    const recipes: Recipe[] = [
    ];
    spyOn(recipeService, 'getRecipes').and.returnValue(of(recipes)); 

    
    component.searchForm.setValue('Test');

    
    fixture.detectChanges();

    
    expect(component.filteredRecipes).toEqual([
     
    ]);
  });

  it('should emit filtered recipes when search query changes', () => {
    spyOn(component.filterItems, 'emit');

  
    component.searchForm.setValue('Test');

    fixture.detectChanges();

    expect(component.filterItems.emit).toHaveBeenCalledWith(component.filteredRecipes);
  });
});
