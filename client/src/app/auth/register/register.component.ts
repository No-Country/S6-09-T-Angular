import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ValidatorService } from '../../services/validator.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  miFormulario:FormGroup = this.fb.group({
    name  :  ['', [Validators.required, Validators.pattern( this.vs.nombreApellidoPattern )]],
    email   :  ['', [Validators.required, Validators.pattern( this.vs.emailPattern )]],
    password:  ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required, ]]
  },{
    validators: [this.vs.camposIguales('password', 'password2')]
  })

  constructor(private fb:FormBuilder,
    private router:Router,
    private authService:AuthService,
    private vs:ValidatorService){}


    campoNoValido(campo:string) {
      return this.miFormulario.get(campo)?.touched &&
      this.miFormulario.get(campo)?.invalid;
    }
  
    register(){
      const {name, email, password} = this.miFormulario.value;

    this.authService.register(name, email, password)
        .subscribe( valid => {
          console.log(valid);
          if( valid === true){
            
            this.router.navigateByUrl('/dashboard/classroom');
            
          }else{
            Swal.fire({
              icon:'error',
              title:'Email ya registrado',
              showConfirmButton:true,
              confirmButtonColor: '#18619b',
              
            })
            
          }
          
        })
      
    }

    

}
