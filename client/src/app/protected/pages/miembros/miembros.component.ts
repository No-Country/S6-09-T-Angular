import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { UserService } from '../../../services/user.service';
import { AuthResponse, User } from '../../../interfaces/Auth';
import { map } from 'rxjs';

@Component({
  selector: 'app-miembros',
  templateUrl: './miembros.component.html',
  styleUrls: ['./miembros.component.scss']
})
export class MiembrosComponent implements OnInit{

  user!: string;
  users: any[] = [];

  constructor(private chatService:ChatService,
              private userService:UserService){
  }

  ngOnInit(): void {
    // let data = JSON.parse(sessionStorage.getItem('data')!);
    // this.user = data.user;

    // this.chatService.getActiveUsers(this.user).subscribe(resp =>{
    //   console.log(this.user);
    //   console.log(resp);
      
    // })

   this.userService.getUsers().subscribe(resp => console.log(resp))
   
    
   
   

    }

}
