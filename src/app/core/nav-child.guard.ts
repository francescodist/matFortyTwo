import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { NavigationService } from './services/navigation/navigation.service';

@Injectable({
    providedIn: 'root',
})
export class NavChildGuard implements CanActivate {
    constructor(private navigationService: NavigationService) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        const title = next.data.title;
        this.navigationService.setActivePage(title, next.url.length, true);
        return true;
    }
}
