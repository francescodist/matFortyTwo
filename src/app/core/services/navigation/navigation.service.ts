import { Injectable } from '@angular/core';
import { NavRoute, NavRouteService } from '../../../nav-routing';

export class Page {
    title: string;
    isChild: boolean;
    urlLength: number;
    constructor(title, urlLength, isChild) {
        this.title = title;
        this.isChild = !!isChild;
        this.urlLength = urlLength;
    }
}

@Injectable({
    providedIn: 'root',
})
export class NavigationService {
    private readonly navigationItems: NavRoute[];
    private selectedNavigationItem: NavRoute = {} as NavRoute;
    private activePage;

    constructor(private navRouteService: NavRouteService) {
        this.navigationItems = navRouteService.getNavRoutes();
    }

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

    public setActivePage(title: string, urlLength?: number, isChild?) {
        this.activePage = new Page(title, urlLength, isChild);
    }
}
