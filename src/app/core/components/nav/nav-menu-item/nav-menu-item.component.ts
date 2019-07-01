import { Component, Input, OnInit } from '@angular/core';
import { NavRoute } from '../../../../nav-routing';
import { NavigationService } from '../../../services/navigation/navigation.service';

@Component({
    selector: 'app-nav-menu-item',
    templateUrl: './nav-menu-item.component.html',
    styleUrls: ['./nav-menu-item.component.scss'],
})
export class NavMenuItemComponent implements OnInit {
    @Input() navigationItem: NavRoute = {} as NavRoute;

    constructor(private navigationService: NavigationService) {}

    ngOnInit() {}

    public isSelected(navItem: NavRoute) {
        return this.navigationService.getSelectedNavigationItem() === navItem;
    }

    public shouldOpenGroup(groupedNavItems: NavRoute[]) {
        return groupedNavItems.reduce((shouldOpen, navItem) => {
            return shouldOpen || this.isSelected(navItem);
        }, false);
    }
}
