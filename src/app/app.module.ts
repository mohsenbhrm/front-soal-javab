import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { CoreModule } from './core/core.module';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './core/auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    LayoutModule
  ],
  providers: [
    AuthGuard,
    { provide: 'api.config', useValue: environment.apiConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
