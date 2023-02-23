import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ClassRoomComponent } from './class-room/class-room.component';
import { ClassWallComponent } from './class-room/class-wall/class-wall.component';
import { ClassDeliveriesComponent } from './class-room/class-deliveries/class-deliveries.component';
import { ClassMembersComponent } from './class-room/class-members/class-members.component';

const routes: Routes = [
  {
    path:'classroom',
    component:ClassRoomComponent
  },
  {
    path:'classroom/class-wall',
    component:ClassWallComponent
  },
  {
    path:'classroom/class-deliveries',
    component:ClassDeliveriesComponent
  },
  {
    path:'classroom/class-members',
    component:ClassMembersComponent
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
