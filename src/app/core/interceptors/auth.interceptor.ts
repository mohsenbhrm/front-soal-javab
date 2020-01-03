import { Inject } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { AuthService } from '@app/core/auth/auth.service';

export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private loginService: AuthService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      !request ||
      !request.url ||
      !(/^http/.test(request.url) || /^https/.test(request.url))
    ) {
      return next.handle(request).pipe(
        tap(
          _ => {
          },
          () => {
          }
        )
      );
    }
    const account = this.loginService.getAccount();
    if (account) {
        // console.log(account);
      request = request.clone({
        setHeaders: {
            Authorization: `Bearer ${account.token}`
        }
      });
    }
    return next.handle(request).pipe(
      tap(
        _ => {
          // this.spinnerService.hide();
        },
        () => {
          // this.spinnerService.hide();
        }
      )
    );
  }
}
