import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'hp-toast',
    templateUrl: './toast.component.html'
})

export class ToastComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    @Input() type: 'error' | 'warning' | 'success' = 'error';
    @Input() message: string;
}