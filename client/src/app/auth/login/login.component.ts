import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  miFormulario:FormGroup = this.fb.group({
    email:['usuario-test@gmail.com',[Validators.required,Validators.email]],
    password:['12345678',[Validators.required,Validators.minLength(6)]]
  })

  constructor(private fb:FormBuilder,
              private router:Router,
              private authService:AuthService){}

  login(){
    
  } 

}
