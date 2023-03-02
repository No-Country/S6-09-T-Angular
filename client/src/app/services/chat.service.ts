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


  
            
  
  sendMessage(message:string, user:string, idSala:string) {

    const payload = {
      user,
      message,
      idSala
    }
    console.log(payload);
    
    this.socket.emit('message', payload);
  }


  getActiveUsers(): Observable<any> {
  return this.wsService.listen('active-users');
}

getMessage(): Observable<any> {
  return this.wsService.listen('new-message');
}

}
