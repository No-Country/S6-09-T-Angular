import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { ValidatorService } from 'src/app/services/validator.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.scss']
})
export class RecuperarPasswordComponent implements OnInit {

  miFormulario:FormGroup = this.fb.group({
    email   :  ['', [Validators.required, Validators.pattern( this.vs.emailPattern )]],
  })


  constructor(private fb:FormBuilder,
              private vs:ValidatorService,
              private userService:UserService){}

  ngOnInit(): void {
    
  }

  campoNoValido(campo:string) {
    return this.miFormulario.get(campo)?.touched &&
    this.miFormulario.get(campo)?.invalid;
  }

  enviar(){
    const {email} = this.miFormulario.value;
    // console.log(email);
    this.userService.resetPassword(email);
    
  }



}
