import { Route } from '@angular/router';

export interface NavRoute extends Route {
    icon?: string;
    path: string;
}

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

export function getNavRoutes(): NavRoute[] {
    return navRoutes.filter(route => route.data && route.data.title);
}
