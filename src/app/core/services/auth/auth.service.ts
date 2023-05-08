import { inject, Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
import { tap } from 'rxjs';
import { EventManagerService } from '@core/services';
import { Endpoints, Events } from '@shared/constants';
import { StorageKey } from '@shared/enums';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private jwtHelper: JwtHelperService = new JwtHelperService();

  http: HttpClient = inject(HttpClient);
  router: Router = inject(Router);
  eventManager: EventManagerService = inject(EventManagerService);

  getJwtHelper(): JwtHelperService {
    return this.jwtHelper;
  }

  getUserFromToken(): any {
    const token = localStorage.getItem(StorageKey.AccessToken);

    if (!token) {
      return null;
    }

    return this.jwtHelper.decodeToken(token);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem(StorageKey.AccessToken);

    if (!token) {
      return false;
    }

    return !this.jwtHelper.isTokenExpired(token);
  }

  login(username: string, password: string) {
    return this.http
      .post(Endpoints.authenticate, {username, password})
      .pipe(
        tap((response: any) => {
          const {data} = response;

          localStorage.setItem(StorageKey.AccessToken, data[StorageKey.AccessToken]);
        })
      );
  }

  logout(): void {
    Object.keys(Events).forEach(name => {
      this.eventManager.unsubscribe(Events[name]);
    });

    localStorage.removeItem(StorageKey.AccessToken);

    this.router.navigate(['auth']);
  }
}
