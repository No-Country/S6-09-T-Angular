import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ClassRoomComponent } from './class-room/class-room.component';


const routes: Routes = [
  {
    path:'classroom',
    component:ClassRoomComponent
  },
  {
    path:'home',
    component:HomePageComponent
  },
  {
    path:'nosotros',
    component:NosotrosComponent
  },
  {
    path:'**',
    redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
