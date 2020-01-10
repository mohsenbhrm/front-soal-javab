import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '@app/shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { QuestionComponent } from '@app/pages/question/question.component';


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
  ],
  imports: [
    SharedModule,
    RouterModule
  ]
})
export class LayoutModule { }