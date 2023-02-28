import { Injectable } from '@angular/core';
import { WebSocketService } from './web-socket.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  
  constructor(private wsService:WebSocketService,
              private authService: AuthService) { }

  sendMessage(mensaje:string){
    const payload = {
      user: 'usuario',
      mensaje,
      idSala: '123456789'
    }

    this.wsService.emit('mensaje',payload);
  }

  getMessages(){
    return this.wsService.listen('mensaje-nuevo');

  }
}
