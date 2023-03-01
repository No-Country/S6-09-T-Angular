import { Injectable } from '@angular/core';
import { WebSocketService } from './web-socket.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  
  constructor(private wsService:WebSocketService,
              private authService: AuthService) { }
    //corregido nombre de la variable mensaje
  sendMessage(message:string, user:string, idSala:string){
    const payload = {
      user,
      message,
      idSala
    }

    this.wsService.emit('message',payload);//cambiado nombre de evento mensaje por message
  }

  getMessages(){
    return this.wsService.listen('message');
    
  }
}
