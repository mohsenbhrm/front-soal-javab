import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './core/auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { QuestionComponent } from './pages/question/question.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MyQuestionListComponent } from './pages/my-question-list/my-question-list.component';
import { MyAnswerListComponent } from './pages/my-answer-list/my-answer-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    // loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    component: LoginComponent
  },
  {
    path: 'home',
    // component: LayoutComponent,
    canActivate: [AuthGuard],
    // loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'question',
        component: QuestionComponent,
      },
      {
        path: 'my-questions',
        component: MyQuestionListComponent,
      },
      {
        path: 'my-answers',
        component: MyAnswerListComponent,
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
