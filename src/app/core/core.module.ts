import { NgModule, Injector, Optional, SkipSelf, LOCALE_ID } from '@angular/core';
import { DatePipe, registerLocaleData } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AuthExpiredInterceptor } from './interceptors/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './interceptors/errorhandler.interceptor';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
      deps: [AuthService]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthExpiredInterceptor,
      multi: true,
      deps: [Injector]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
      deps: []
    }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('CoreModule should be imported only in AppModule.');
    }
  }
}
