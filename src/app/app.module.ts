import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '@app/layout/layout.module';
import { CoreModule } from '@app/core/core.module';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AuthGuard } from '@app/core/auth/auth.guard';
import { SharedModule } from '@app/shared/shared.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoginModule } from './login/login.module';
import { PagesModule } from './pages/pages.module';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      }
    }),
    SharedModule,
    AppRoutingModule,
    CoreModule,
    LoginModule,
    LayoutModule,
    PagesModule,
  ],
  providers: [
    AuthGuard,
    { provide: 'api.config', useValue: environment.apiConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
