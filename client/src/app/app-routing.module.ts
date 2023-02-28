import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
<<<<<<< HEAD
import { ClassWallComponent } from './class-room/class-wall/class-wall.component';
import { ClassDeliveriesComponent } from './class-room/class-deliveries/class-deliveries.component';
import { ValidarTokenGuard } from './guards/validar-token.guard';
=======
import { PerfilComponent } from './protected/pages/perfil/perfil.component';
//import { ClassRoomComponent } from './class-room/class-room.component';

>>>>>>> 0b3ad3ed8a5bda3d86114c9c6758ade75b924c8e

const routes: Routes = [
  // {
  //   path: 'classroom',
  //   component: ClassRoomComponent,
  // },
  {
    path: 'classroom/class-wall',
    component: ClassWallComponent,
  },
  {
    path: 'classroom/class-deliveries',
    component: ClassDeliveriesComponent,
  },
  {
<<<<<<< HEAD
    path: 'dashboard',
    loadChildren: () =>
      import('./protected/protected.module').then((m) => m.ProtectedModule),
      canActivate:[ValidarTokenGuard],
      canMatch:[ValidarTokenGuard],
=======
    path:'perfil',
    component:PerfilComponent
  },
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
>>>>>>> 0b3ad3ed8a5bda3d86114c9c6758ade75b924c8e
  },
  {
    path: 'inicio',
    component: HomePageComponent,
  },
  {
    path: 'nosotros',
    component: NosotrosComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'classroom',
    loadChildren: () =>
      import('./protected/protected.module').then((m) => m.ProtectedModule),
  },
  {
    path: '**',
    redirectTo: 'inicio',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
