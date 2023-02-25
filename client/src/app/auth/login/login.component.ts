import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  miFormulario:FormGroup = this.fb.group({
    email:['usuario-test1@gmail.com',[Validators.required,Validators.email]],
    password:['12345678',[Validators.required,Validators.minLength(6)]]
  })

  constructor(private fb:FormBuilder,
              private router:Router,
              private authService:AuthService){}

  login(){
    const {email, password} = this.miFormulario.value;
            
    this.authService.login(email,password)
      .subscribe(valid => {
        if(valid === true){
          
          this.router.navigateByUrl('/dashboard/classroom')
        
        }else{
          Swal.fire({
            icon:'error',
            title:'Credenciales invalidas',
            showConfirmButton:true,
            confirmButtonColor: '#18619b',
            
          })
        }
    });
    
  }
  
  campoNoValido(campo:string) {
    return this.miFormulario.get(campo)?.touched &&
    this.miFormulario.get(campo)?.invalid;
  }

}
