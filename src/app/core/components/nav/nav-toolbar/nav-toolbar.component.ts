import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-nav-toolbar',
    templateUrl: './nav-toolbar.component.html',
    styleUrls: ['./nav-toolbar.component.scss'],
})
export class NavToolbarComponent implements OnInit {
    @Input() title: string;
    @Output() toggleSideNav = new EventEmitter();
    @Output() logout = new EventEmitter();

    constructor() {}

    ngOnInit() {}

    public onToggleSideNav() {
        this.toggleSideNav.emit();
    }

    public onLogout() {
        this.logout.emit();
    }
}
