import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { NgrxErrorFacade } from './+state/ngrx-error.facade';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class NgrxErrorInterceptorService implements HttpInterceptor {
  constructor(private facade: NgrxErrorFacade) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(err => {
        if (err instanceof HttpErrorResponse) {
          switch (err.status) {
            case 401:
              this.facade.throw401Error(err);
              break;
            case 404:
              this.facade.throw404Error(err);
              break;
            default:
              throwError(err);
              break;
          }
        }
        return throwError(err);
      })
    );
  }
}
