import { Injectable } from '@angular/core';
import { getNavRoutes, NavRoute } from '../../nav-routing';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    private navigationItems: NavRoute[] = getNavRoutes();
    private selectedItem: NavRoute = {} as NavRoute;

    constructor() {}

    public getNavigationItems(): NavRoute[] {
        return this.navigationItems;
    }

    public selectNavigationItemByPath(path: string) {
        this.selectedItem = this.navigationItems.find(
            navItem => navItem.path === path
        );
    }

    public getSelectedNavigationItem(): NavRoute {
        return this.selectedItem;
    }
}
