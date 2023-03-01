import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent {

  developers = [
    {
     img:'1.png',
     nombre:'leonel perez',
     rol:'front-end' 
    },
    {
      img:'2.png',
      nombre:'alejandro serna',
      rol:'front-end' 
     },
     {
      img:'3.png',
      nombre:'alexis estrada',
      rol:'front-end' 
     },
     {
      img:'4.png',
      nombre:'francisco zelaya',
      rol:'front-end' 
     },
     {
      img:'5.png',
      nombre:'miguel blanor guerrero',
      rol:'back-end' 
     },
     {
      img:'6.png',
      nombre:'kimberlly barraza',
      rol:'back-end' 
     },
     {
      img:'7.png',
      nombre:'jhonny calvo',
      rol:'back-end' 
     },
     {
      img:'8.png',
      nombre:'fausto centurion',
      rol:'QA tester' 
     },
     {
      img:'9.png',
      nombre:'gerardo vargas',
      rol:'diseño UX/UI' 
     },
  ]


  moverDerecha(){

  }

  moverIzquierda(){
    
  }

}
