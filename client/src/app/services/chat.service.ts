import { Injectable } from '@angular/core';
import { WebSocketService } from './web-socket.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  get usuario(){
    return this.authService.usuario;
  }


  constructor(private wsService:WebSocketService,
              private authService: AuthService) { }

  sendMessage(mensaje:string){
    const payload = {
      user: this.usuario.name,
      mensaje,
      idSala: '123456789'
    }

    this.wsService.emit('mensaje',payload);
  }

  getMessages(){
    return this.wsService.listen('mensaje-nuevo');

  }
}
