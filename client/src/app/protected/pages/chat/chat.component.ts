import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { WebSocketService } from 'src/app/services/web-socket.service';
import { ChatService } from '../../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  miFormulario:FormGroup = this.fb.group({
  mensaje:['',[]]
    })

  mensajesSuscription!: Subscription;
  mensajes : any[] = [];  

  constructor(private wsService:WebSocketService,
              private chatService:ChatService,
              private fb:FormBuilder,
              private router:Router
              ){}

  ngOnInit(): void {
    this.chatService.sendMessage('Hola desde angular');
    this.mensajesSuscription = this.chatService.getMessages().subscribe( msg =>{
      console.log(msg);
      this.mensajes.push( msg )
    })
    
  }

  enviar(){
    const { mensaje } = this.miFormulario.value;
    // console.log(mensaje);
    this.chatService.sendMessage(mensaje);
    this.miFormulario.reset();
    
  }

}
