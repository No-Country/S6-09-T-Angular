import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PerfilComponent } from './protected/pages/perfil/perfil.component';
//import { ClassRoomComponent } from './class-room/class-room.component';


const routes: Routes = [
  {
    path:'inicio',
    component:HomePageComponent
  },
  {
    path:'nosotros',
    component:NosotrosComponent
  },
  {
    path:'perfil',
    component:PerfilComponent
  },
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'dashboard',
    loadChildren: () => import('./protected/protected.module').then(m => m.ProtectedModule)
  },
  {
    path:'**',
    redirectTo:'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
