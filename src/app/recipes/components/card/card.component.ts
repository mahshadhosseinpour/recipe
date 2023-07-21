import { Component, OnInit } from '@angular/core';
import { CardDirective } from '../../directive/card.directive';

@Component({
    selector: 'hp-card',
    templateUrl: './card.component.html',
    providers:[{provide:CardDirective,useExisting:CardComponent}]
})

export class CardComponent extends CardDirective<any> {
    constructor() {
        super()
     }

    

    ngOnInit() { }
    
    isSave:boolean=false;

    saveCollection(){
        this.isSave=! this.isSave;
    }

}