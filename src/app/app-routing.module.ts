import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { navRoutes } from './nav-routing';
import { NavComponent } from './core/nav/nav.component';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: './pages/login-page/login-page.module#LoginPageModule'
    },
    {
        path: 'nav',
        component: NavComponent,
        children: navRoutes
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
