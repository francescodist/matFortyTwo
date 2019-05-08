import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-nav-menu-item',
    templateUrl: './nav-menu-item.component.html',
    styleUrls: ['./nav-menu-item.component.scss']
})
export class NavMenuItemComponent implements OnInit {
    @Input() isSelected: boolean;
    @Input() title: string;
    @Input() icon: string;

    constructor() {}

    ngOnInit() {}
}
