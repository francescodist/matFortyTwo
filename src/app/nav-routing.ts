import { Route, Router } from '@angular/router';
import { Injectable } from '@angular/core';

export interface NavRoute extends Route {
    icon?: string;
}

export const sideNavPath = 'nav';

export const navRoutes: NavRoute[] = [
    {
        data: { title: 'Home' },
        icon: 'home',
        path: 'home',
        loadChildren: () =>
            import('./pages/home-page/home-page.module').then(
                m => m.HomePageModule,
            ),
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
];

@Injectable({
    providedIn: 'root',
})
export class NavRouteService {
    navRoute: Route;

    constructor(router: Router) {
        this.navRoute = router.config.find(route => route.path === sideNavPath);
    }

    public getNavRoutes(): NavRoute[] {
        return this.navRoute.children.filter(
            route => route.data && route.data.title,
        );
    }
}
