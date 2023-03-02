import { Component, HostListener, OnInit, Pipe } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe, map, Subscription, tap } from 'rxjs';
import { Message } from 'src/app/interfaces/Classroom';
import { WebSocketService } from 'src/app/services/web-socket.service';
import { ChatService } from '../../../services/chat.service';
import { ClassroomService } from '../../../services/classroom.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  
  idSala!:string;
  user!: string;

  mensajes: Message[] = [];
  elemento! :HTMLElement;
  
  miFormulario:FormGroup = this.fb.group({
  mensaje:['',[]]
    })

  mensajesSuscription!: Subscription;
  
  constructor(private chatService:ChatService,
              private classroomService:ClassroomService,
              private fb:FormBuilder,
              private router:Router,
              private route:ActivatedRoute
              ){
    
    this.chatService.getMessage().subscribe(msg =>{
      this.mensajes.push(msg);
      this.playAudio();
      navigator.vibrate(1000);
    })

              }

  ngOnInit(): void {

    let data = JSON.parse(sessionStorage.getItem('data')!);
    this.idSala = this.route.snapshot.params['id'];
    this.user = data.user;

    this.classroomService.getAllMessages(this.idSala)
    .subscribe(resp => {
      this.mensajes = resp[0].other; 
    });

    

    
  
  }

  
  enviar(){
    const { mensaje } = this.miFormulario.value;

    if(mensaje == ''){
      return;
    }

    let time = new Date();

    this.elemento = document.getElementById('chatDiv')!;


    setTimeout(() => {
       this.elemento.scrollTop = this.elemento?.scrollHeight; 
    },50)

    
    this.chatService.sendMessage(mensaje,this.user,this.idSala,time);
    this.miFormulario.reset();
  }

  playAudio() {
    const audio = new Audio();
    audio.src = 'assets/audio/1.mp3';
    audio.load();
    audio.play();
    }

    

}
