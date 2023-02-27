import { Component } from '@angular/core';

@Component({
  selector: 'app-entregas',
  templateUrl: './entregas.component.html',
  styleUrls: ['./entregas.component.scss']
})
export class EntregasComponent {

  tareas:any = [
    
    {
      nombre: "Sistemas",
      status: "Fecha de entrega: 25 de febrero 2023",
      detalle: "Cerar una calculadora en Angular",
      mensajes: [
        {
          Autor: "Pedro",
          mensaje: "Esta aun disponible"
      },
      {
        Autor: "Lucas",
        mensaje: "No le entiendo al problema"
    },{
      autor: "Alex",
      mensaje: "Enviado"
  }
      ]
    }
  ]

  detalle:boolean = false;
  entrega: boolean =false;
  mensaje: boolean = false;


  

}


