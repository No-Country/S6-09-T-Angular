import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClassroomComponent } from './pages/classroom/classroom.component';
import { ChatComponent } from './pages/chat/chat.component';


const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
    children:[
      {path:'classroom',component:ClassroomComponent},
      {path:'chat',component:ChatComponent}
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
