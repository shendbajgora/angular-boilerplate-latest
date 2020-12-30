import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../token/token.service';
import general from '../../constants/general';
import { rootUrl } from '../../constants/urls';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router,
              private http: HttpClient,
              private tokenService: TokenService) {
  }

  login(): void {

  }

  register(): void {

  }

  isLoggedIn(): boolean {
    return !this.tokenService.isTokenExpired();
  }

  logout(): void {
    this.tokenService.removeToken(general.token.access, general.token.refresh);
    this.router.navigateByUrl(rootUrl);
  }
}
