import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule,
    PreloadAllModules,
    RouteReuseStrategy,
} from '@angular/router';
import { navRoutes, sideNavPath } from './nav-routing';
import { NavComponent } from './core/components/nav/nav.component';
import { AuthGuard } from './auth/auth.guard';
import { CustomRouteReuseStrategy } from './core/nav-reuse-strategy';
import { NavGuard } from './core/nav.guard';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: () =>
            import('./pages/login-page/login-page.module').then(
                m => m.LoginPageModule,
            ),
    },
    {
        path: sideNavPath,
        component: NavComponent,
        children: navRoutes,
        canActivate: [AuthGuard],
        canActivateChild: [NavGuard],
    },
    {
        path: '**',
        redirectTo: 'login',
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule],
    providers: [
        { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy },
    ],
})
export class AppRoutingModule {}
