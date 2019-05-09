import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { NavRoute } from '../../../nav-routing';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
    isOpen = true;

    constructor(private navigationService: NavigationService) {}

    ngOnInit() {}

    public toggleSideNav() {
        this.isOpen = !this.isOpen;
    }

    public getNavigationItems(): NavRoute[] {
        return this.navigationService.getNavigationItems();
    }

    public getSelectedNavigationItem(): NavRoute {
        return this.navigationService.getSelectedNavigationItem();
    }
}
