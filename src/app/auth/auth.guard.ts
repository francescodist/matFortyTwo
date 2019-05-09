import { Injectable } from '@angular/core';
import {
    CanActivateChild,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { NavigationService } from '../core/services/navigation.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
    constructor(private navigationService: NavigationService) {}

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
}
