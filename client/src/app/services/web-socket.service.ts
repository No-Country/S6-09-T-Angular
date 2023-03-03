import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map, Observable, tap } from 'rxjs';
import { User } from '../interfaces/Auth';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  public socketStatus = false;
  user!: string;
  name!: any;
  obj!: {};

  constructor(private socket: Socket, private userService: UserService) {
    this.checkStatus();
    let data = JSON.parse(sessionStorage.getItem('data')!);
    this.user = data.user;
    this.obj = { id: this.user };
  }

  checkStatus(): void {
    this.socket.on('connect', () => {
      console.log('conectado al servidor');
      this.socket.emit('hola', this.obj);
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      console.log('Desconectado del servidor');
      this.socketStatus = false;
    });
  }

  emit(event: string, payload?: any, callback?: Function): void {
    this.socket.emit(event, payload, callback);
  }

  listen(event: string): Observable<any> {
    return this.socket.fromEvent(event);
  }
}
