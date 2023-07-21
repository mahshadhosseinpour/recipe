import { Directive, EventEmitter, Input, Output } from '@angular/core';

@Directive()
export class CardDirective<T>{
    constructor() { }

    @Input({ required: true })
    id?: number;

    @Input({ required: true })
     name : string;
       
    @Input({ required: true })
    description:string;

    @Input({ required: true })
    imageUrl:string;

    @Output()
    onSaveCollection:EventEmitter<T>= new EventEmitter<T>();
}