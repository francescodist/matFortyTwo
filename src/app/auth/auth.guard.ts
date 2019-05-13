import { Injectable } from '@angular/core';
import {
    CanActivateChild,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    CanActivate,
    Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { NavigationService } from '../core/services/navigation/navigation.service';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivateChild, CanActivate {
    constructor(
        private navigationService: NavigationService,
        private authService: AuthService,
        private router: Router
    ) {}

    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        const nextRoutePath = next.routeConfig.path || null;
        if (nextRoutePath) {
            this.navigationService.selectNavigationItemByPath(nextRoutePath);
        }
        return true;
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        if (this.authService.isLogged()) {
            this.authService.redirectUrl = null;
            return true;
        }
        this.authService.redirectUrl = state.url;
        this.router.navigate(['']);
        return false;
    }
}
