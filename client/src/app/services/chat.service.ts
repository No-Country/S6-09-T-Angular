import { Injectable } from '@angular/core';
import { WebSocketService } from './web-socket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private wsService:WebSocketService) { }

  sendMessage(mensaje:string){
    const payload = {
      de: 'Alejandro',
      mensaje
    }

    this.wsService.emit('mensaje',payload);
  }
}
