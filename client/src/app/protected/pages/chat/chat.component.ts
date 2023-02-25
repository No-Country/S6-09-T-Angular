import { Component, OnInit } from '@angular/core';
import { WebSocketService } from 'src/app/services/web-socket.service';
import { ChatService } from '../../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private wsService:WebSocketService,
              private chatService:ChatService){}

  ngOnInit(): void {
    this.chatService.sendMessage('Hola desde angular');
  }

}
