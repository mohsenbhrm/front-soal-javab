import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '@app/shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutComponent } from './layout.component';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { QuestionComponent } from '@app/pages/question/question.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// const routes: Routes = [
//   {
//     path: '',
//     component: LayoutComponent,
//     pathMatch: 'full'
//   },
//   {
//     path: 'home',
//     component: LayoutComponent,
//     pathMatch: 'full',
//     children: [
//       {
//         path: '',
//         component: QuestionComponent,
//         pathMatch: 'full'
//       },
//       {
//         path: 'question',
//         component: QuestionComponent,
//         pathMatch: 'full'
//       }
//     ]
//   }
// ];
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    LayoutComponent,

    QuestionComponent
  ],
  imports: [
    SharedModule,
    RouterModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      },
      isolate: true
    })
  ]
})
export class LayoutModule { }
