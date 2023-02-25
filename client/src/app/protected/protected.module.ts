import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProtectedRoutingModule } from './protected-routing.module';

import { MenuOpcionesComponent } from './components/menu-opciones/menu-opciones.component';
import { ClassroomComponent } from './pages/classroom/classroom.component';
import { ChatComponent } from './pages/chat/chat.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MuroComponent } from './pages/muro/muro.component';
import { TrabajosComponent } from './pages/trabajos/trabajos.component';
import { EntregasComponent } from './pages/entregas/entregas.component';
import { MiembrosComponent } from './pages/miembros/miembros.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
    ClassroomComponent,
    MenuOpcionesComponent,
    ChatComponent,
    MuroComponent,
    TrabajosComponent,
    EntregasComponent,
    MiembrosComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    RouterModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ProtectedModule { }
