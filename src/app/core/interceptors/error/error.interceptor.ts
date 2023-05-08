import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(error => {
        if (error.status === 401) {
          // Handle 401 errors here
        } else if (error.status === 403) {
          // Handle 403 errors here
        } else {
          // Handle other errors here
          console.log('Error status:', error.status);
          console.log('Error message:', error.message);
          // Return the error as an Observable
          return throwError(error);
        }

        return throwError(error);
      })
    );
  }
}
