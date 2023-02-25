import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/Auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogged : boolean = false; 
  
  constructor(private authService:AuthService){

  }

  ngOnInit(): void {
    this.isLogged = localStorage.getItem('token') !== null;
    // console.log(this.isLogged);
    
  }

  logout(){
    this.authService.logout();
  }

 

  

}
