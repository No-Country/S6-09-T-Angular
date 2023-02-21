import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { ClassroomComponent } from './classroom/classroom.component';
import { MenuOpcionesComponent } from './pages/student/components/menu-opciones/menu-opciones.component';


@NgModule({
  declarations: [
    ClassroomComponent,
    MenuOpcionesComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule { }
