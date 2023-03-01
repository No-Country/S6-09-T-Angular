import { MuroComponent } from './pages/muro/muro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClassroomComponent } from './pages/classroom/classroom.component';
import { ChatComponent } from './pages/chat/chat.component';
import { AddClassroomComponent } from './pages/add-classroom/add-classroom.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { TrabajosComponent } from './pages/trabajos/trabajos.component';
import { EntregasComponent } from './pages/entregas/entregas.component';
import { MiembrosComponent } from './pages/miembros/miembros.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'classroom', component: ClassroomComponent },
      { path: 'chat/:id', component: ChatComponent },
      { path: 'agregar-classroom', component: AddClassroomComponent },
      { path: 'muro/:id', component:MuroComponent},
      { path: 'perfil', component:PerfilComponent},
      {path:'trabajos/:id', component:TrabajosComponent},
      {path:'entregas/:id', component:EntregasComponent},
      {path:'miembros/:id', component:MiembrosComponent}

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtectedRoutingModule {}
