import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import general from '../../constants/general';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private jwtInstance = new JwtHelperService();

  constructor() {
  }

  get jwt(): JwtHelperService {
    return this.jwtInstance;
  }

  public setToken(key: 'access_token' | 'refresh_token', value: string): void {
    if (!(key && value)) {
      return;
    }

    localStorage.setItem(key, value);
  }

  public getToken(key = general.token.access): string | null {
    return localStorage.getItem(key);
  }

  public removeToken(...keys: string[]): void {

    keys.forEach(key => {
      localStorage.removeItem(key);
    });
  }

  public isTokenExpired(key?: 'access_token' | 'refresh_token', offsetSeconds?: number | undefined): boolean {
    const token = this.getToken(key) || undefined;

    return !token ? true : this.jwt.isTokenExpired(token, offsetSeconds);
  }

  public tokenExpirationDate(key?: 'access_token' | 'refresh_token'): Date | null {
    const token = this.getToken(key) || undefined;

    return this.jwt.getTokenExpirationDate(token);
  }

  public getUserFromToken(key?: 'access_token' | 'refresh_token'): any {
    const token = this.getToken(key) || undefined;

    return this.jwt.decodeToken(token);
  }
}
