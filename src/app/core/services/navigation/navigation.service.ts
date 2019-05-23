import { Injectable } from '@angular/core';
import { getNavRoutes, NavRoute } from '../../../nav-routing';

export class Page {
    title: string;
    isChild: boolean;
    constructor(title, isChild?) {
        this.title = title;
        this.isChild = !!isChild;
    }
}

@Injectable({
    providedIn: 'root',
})
export class NavigationService {
    private navigationItems: NavRoute[] = getNavRoutes();
    private selectedNavigationItem: NavRoute = {} as NavRoute;
    private activePage;

    constructor() {}

    public getNavigationItems(): NavRoute[] {
        return this.navigationItems;
    }

    public selectNavigationItemByPath(path: string) {
        this.selectedNavigationItem = this.navigationItems.find(
            navItem => navItem.path === path,
        );
        this.setActivePage(this.selectedNavigationItem.data.title);
    }

    public getSelectedNavigationItem(): NavRoute {
        return this.selectedNavigationItem;
    }

    public getActivePage(): Page {
        return this.activePage;
    }

    public setActivePage(title: string, isChild?: boolean) {
        this.activePage = new Page(title, isChild);
    }
}
