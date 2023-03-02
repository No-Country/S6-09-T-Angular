import { Injectable } from '@angular/core';
import { WebSocketService } from './web-socket.service';
import { AuthService } from './auth.service';
import { Socket } from 'ngx-socket-io';
import { Message } from '../interfaces/Classroom';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private wsService:WebSocketService,
              private authService: AuthService,
              private socket: Socket) {
             
  }

  sendMessage(message:string, user:string, idSala:string,time:Date) {

    const payload = {
      user,
      message,
      idSala,
      time
    }
    console.log(payload);

    this.socket.emit('chat', payload);
    this.socket.emit('message', payload);

  }


  getActiveUsers(): Observable<any> {
    this.socket.emit('chat');
    return this.wsService.listen('usuarios-conectados');
  
}

getMessage(): Observable<any> {
  return this.wsService.listen('mensaje');
}

}
