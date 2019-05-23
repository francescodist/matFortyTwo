import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { NavigationService } from './services/navigation/navigation.service';

@Injectable({
    providedIn: 'root',
})
export class NavRootGuard implements CanActivate {
    constructor(private navigationService: NavigationService) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        const key: string = route.data.key;
        this.navigationService.selectNavigationItemByPath(key);
        return true;
    }
}
