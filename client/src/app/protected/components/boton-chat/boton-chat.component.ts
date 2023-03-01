import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-boton-chat',
  templateUrl: './boton-chat.component.html',
  styleUrls: ['./boton-chat.component.scss']
})
export class BotonChatComponent implements OnInit {
  
  idClassroom?         :string;

  constructor(private route:ActivatedRoute){

  }


  ngOnInit(): void {
    this.idClassroom = this.route.snapshot.params['id'];
  }


}
