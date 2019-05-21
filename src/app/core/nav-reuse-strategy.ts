import {
    RouteReuseStrategy,
    ActivatedRouteSnapshot,
    DetachedRouteHandle,
} from '@angular/router';

export class CustomRouteReuseStrategy implements RouteReuseStrategy {
    handlers: { [key: string]: DetachedRouteHandle } = {};

    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        return this.shouldReuse(route) || false;
    }

    store(route: ActivatedRouteSnapshot, handle: {}): void {
        if (this.shouldReuse(route)) {
            this.setHandler(route, handle);
        }
    }

    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return this.hasHandler(route);
    }

    retrieve(route: ActivatedRouteSnapshot): {} {
        return this.getHandler(route);
    }

    shouldReuseRoute(
        future: ActivatedRouteSnapshot,
        curr: ActivatedRouteSnapshot,
    ): boolean {
        return (
            future.routeConfig === curr.routeConfig || this.shouldReuse(future)
        );
    }

    private shouldReuse(route: ActivatedRouteSnapshot) {
        return this.isReusable(route);
    }

    private isReusable(route: ActivatedRouteSnapshot) {
        return route.data && route.data.shouldReuse;
    }

    private getKey(route: ActivatedRouteSnapshot) {
        return route.data.key;
    }

    private setHandler(
        route: ActivatedRouteSnapshot,
        handle: DetachedRouteHandle,
    ) {
        this.handlers[this.getKey(route)] = handle;
    }

    private getHandler(route: ActivatedRouteSnapshot) {
        return this.handlers[this.getKey(route)];
    }

    private hasHandler(route: ActivatedRouteSnapshot) {
        return !!this.getHandler(route);
    }
}
