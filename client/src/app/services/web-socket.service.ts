import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  public socketStatus = false;

  constructor(private socket: Socket){ this.checkStatus();}
  
  checkStatus():void{
    let obj={name:"miguel",guerrero:"guerrero"}
    this.socket.on('connect',() =>{
      console.log('conectado al servidor');
      this.socket.emit('hola', obj)
      this.socketStatus = true;
    })

    this.socket.on('disconnect',() =>{
      console.log('Desconectado del servidor');
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
