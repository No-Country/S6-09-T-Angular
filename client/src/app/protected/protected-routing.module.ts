import { MuroComponent } from './pages/muro/muro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClassroomComponent } from './pages/classroom/classroom.component';
import { ChatComponent } from './pages/chat/chat.component';
import { AddClassroomComponent } from './pages/add-classroom/add-classroom.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'classroom', component: ClassroomComponent },
      { path: 'chat', component: ChatComponent },
      { path: 'agregar-classroom', component: AddClassroomComponent },
      { path: 'muro/:id', component:MuroComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtectedRoutingModule {}
