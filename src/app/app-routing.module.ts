import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './core/auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { QuestionComponent } from './pages/question/question.component';


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
    pathMatch: 'full',
    // loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
    component: LayoutComponent,
    children: [

      {
        path: '',
        component: QuestionComponent,
        pathMatch: 'full'
      },
      {
        path: 'question',
        component: QuestionComponent,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
