import { HomePageComponent } from './home-page.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavRootGuard } from '../../core/nav-root.guard';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        canActivate: [NavRootGuard],
        data: { shouldReuse: true, key: 'home' },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomePageRoutingModule {}
