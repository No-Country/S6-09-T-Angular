import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClassroomComponent } from './pages/classroom/classroom.component';
import { ChatComponent } from './pages/chat/chat.component';
import { MuroComponent } from './pages/muro/muro.component';
import { TrabajosComponent } from './pages/trabajos/trabajos.component';


const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
    children:[
      {path:'classroom',component:ClassroomComponent},
      {path:'chat',component:ChatComponent},
      {path:'muro',component:MuroComponent},
      {path:'trabajos',component:TrabajosComponent}
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
