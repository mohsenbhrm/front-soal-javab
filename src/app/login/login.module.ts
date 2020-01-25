import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { SharedModule } from '@app/shared/shared.module';
import { SignUpComponent } from './sign-up/sign-up.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: LoginComponent,
//     pathMatch: 'full'
//   },
//   {
//     path: 'login',
//     component: LoginComponent,
//     pathMatch: 'full'
//   }
// ];

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    SharedModule,
    RouterModule

    // RouterModule.forChild(routes)
  ]
})
export class LoginModule { }
