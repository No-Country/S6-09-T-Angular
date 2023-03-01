import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';



const routes: Routes = [
    {
      path:'',
      component:MainComponent,
      children:[
        {
          path:'login',
          component:LoginComponent
        },
        {
          path:'register',
          component:RegisterComponent
        },
        {
          path:'recuperar-contrasena',
          component:RecuperarPasswordComponent
        },
        {
          path:'**',
          redirectTo:'login'
        }
      ]
    }
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
