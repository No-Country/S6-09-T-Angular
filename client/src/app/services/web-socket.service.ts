import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  public socketStatus = false;
  data = JSON.parse(localStorage.getItem('data')!);
  user = this.data.user;

  
  constructor(private socket: Socket){ 
  this.checkStatus();
}
  
  checkStatus(){

    this.socket.on('connection', () =>{
      console.log('conectado al servidor');
      this.socketStatus = true;
    })

    this.socket.on('disconnect',() =>{
      console.log('Desconectado del servidor');
      this.socket.emit('adios', { user: 'Hasta pronto!' });
      this.socketStatus = false;
    })
  }

  emit(event: string, payload?: any, callback?: Function): void {
    this.socket.emit(event, payload, callback);
}

  listen(event: string): Observable<any> {
    return this.socket.fromEvent(event);
  }
  
}
