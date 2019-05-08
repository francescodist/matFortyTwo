import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
    isOpen = true;
    title = 'Home';

    constructor() {}

    ngOnInit() {}

    public toggleSideNav() {
        this.isOpen = !this.isOpen;
    }
}
