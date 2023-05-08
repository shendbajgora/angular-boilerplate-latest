import { inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from "../../services";
import { StorageKey } from "@shared/enums";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  authService: AuthService = inject(AuthService);

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.authService.isAuthenticated()) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem(StorageKey.AccessToken)}`
        }
      });
    }

    return next.handle(request);
  }
}
