import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MainComponent,
    RecuperarPasswordComponent,
    UpdatePasswordComponent,
],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class AuthModule { }
