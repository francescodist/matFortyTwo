import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { AuthService } from '../../../auth/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {
        const token: string = this.authService.getToken();

        if (token) {
            req = req.clone({
                setHeaders: { Authorization: `Bearer ${token}` },
            });
        }

        return next.handle(req);
    }
}
