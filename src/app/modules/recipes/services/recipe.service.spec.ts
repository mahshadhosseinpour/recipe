import { TestBed } from '@angular/core/testing';
import { ReceipeService } from './recipe.service';

describe('ReceipeService', () => {
  let service: ReceipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return recipes', (done) => {
    service.getRecipes().subscribe((recipes) => {
      expect(recipes.length).toBeGreaterThan(0);
      done();
    });
  });
});
