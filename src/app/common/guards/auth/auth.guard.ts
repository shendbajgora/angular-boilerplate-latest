import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../../services/token/token.service';
import { root } from '../../constants/urls';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private router: Router,
              private tokenService: TokenService) {
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

    const url = route.path;

    if (this.tokenService.isTokenExpired()) {
      this.router.navigate([root.auth], {queryParams: {returnUrl: url}});

      return false;
    }

    return true;
  }
}
