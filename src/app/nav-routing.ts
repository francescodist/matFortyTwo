import { Route } from '@angular/router';

export interface NavRoute extends Route {
    icon?: string;
    title?: string;
    path: string;
}

export const navRoutes: NavRoute[] = [
    {
        title: 'Home',
        icon: 'menu',
        path: 'home',
        loadChildren: './pages/home-page/home-page.module#HomePageModule'
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

export function getNavRoutes(): NavRoute[] {
    return navRoutes.filter(route => route.title).reverse();
}
