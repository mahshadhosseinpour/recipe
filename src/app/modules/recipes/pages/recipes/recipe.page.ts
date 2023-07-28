import { Component, OnInit, Inject } from '@angular/core';
import { ReceipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';


@Component({
    templateUrl: './recipe.page.html',
})

export class RecipePage implements OnInit {

    constructor(private recipeService: ReceipeService,
        private router: Router,
        @Inject('environment') public environment: any,
        private route: ActivatedRoute) { }

    foodList: Recipe[];
    isLoading: boolean = true;
    isError: boolean = false;
    data$: Observable<any[]>;
    dataSubscription: Subscription;

    ngOnInit() {
        this.recipeService.getRecipes().subscribe({
            next: (res) => {
                this.foodList = res;

            },
            error: (er) => {
                this.isError = true;
                setTimeout(() => {
                    this.isError = false;
                }, 2000);
            },
            complete: () => {
                setTimeout(() => {
                    this.isLoading = false;
                }, 300);
            }
        })

        this.data$ = new Observable<any[]>((observer) => {

            const data = [1, 2, 3];
            observer.next(data);

            observer.complete();
        });

        this.dataSubscription = this.data$.subscribe((data) => {
            console.log('Received data:', data);
        });
    }

    ngOnDestroy() {
        if (this.dataSubscription) {
            this.dataSubscription.unsubscribe();
        }
    }

    filterItems(e: Recipe[]) {
        this.foodList = e;
    }

    showMyRecipes() {
        this.router.navigate(['myrecipes'],
            {
                relativeTo: this.route,
                state: { name: 'ali', family: 'alian' },
                queryParams: { recipe: 1 }
            });
    }
}