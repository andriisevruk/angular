import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { TopComponent } from './components/top/top.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { authenticationGuard } from './guards/auth.guard';
import { CarEditComponent } from './components/car-edit/car-edit.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

const routes: Routes = [
  { path: '', component: FormPageComponent },
  {
    path: 'form', component: FormPageComponent, children: [
      { path: 'login', component: LoginFormComponent },
      { path: 'register', component: RegisterFormComponent }
    ]
  },
  {
    path: 'auth', component: AuthPageComponent, canActivate: [authenticationGuard()], children: [
      {
        path: '', canActivateChild: [authenticationGuard()], children: [
          { path: 'home', component: HomeComponent },
          { path: 'maintenance', component: MaintenanceComponent },
          { path: 'top', component: TopComponent },
          { path: 'car-add', component: CarAddComponent },
          { path: 'car-edit/:id', component: CarEditComponent },
          { path: 'car-details/:id', component: CarDetailsComponent },
        ]
      }
    ]
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
