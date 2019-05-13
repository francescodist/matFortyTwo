import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation/navigation.service';
import { NavRoute } from '../../../nav-routing';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
    isOpen = true;

    constructor(
        private navigationService: NavigationService,
        private authService: AuthService,
        private router: Router
    ) {}

    ngOnInit() {}

    public toggleSideNav() {
        this.isOpen = !this.isOpen;
    }

    public getNavigationItems(): NavRoute[] {
        return this.navigationService.getNavigationItems();
    }

    public getSelectedNavigationItem(): NavRoute {
        return this.navigationService.getSelectedNavigationItem();
    }

    public logout() {
        this.authService.logout();
        this.router.navigate(['login'], { replaceUrl: true });
    }
}
