import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../../services/token/token.service';
import { environment } from '../../../../environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokenService = this.tokenService;
    const isApiGateway = request.url.startsWith(environment.apiGateway);

    if (!tokenService.isTokenExpired() && isApiGateway) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${tokenService.getToken()}`
        }
      });
    }

    return next.handle(request);
  }
}
