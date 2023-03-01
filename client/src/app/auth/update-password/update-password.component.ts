import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ValidatorService } from 'src/app/services/validator.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent {

  token?         :string;

  miFormulario:FormGroup = this.fb.group({
    password:  ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required, ]]
  },{
    validators: [this.vs.camposIguales('password', 'password2')]
  })

  constructor(private fb:FormBuilder,
    private router:Router,
    private userService:UserService,
    private vs:ValidatorService,
    private route:ActivatedRoute){

  }

  campoNoValido(campo:string) {
    return this.miFormulario.get(campo)?.touched &&
    this.miFormulario.get(campo)?.invalid;
  }

  enviar(){

    const token = this.route.snapshot.params['id'];
    const {password} = this.miFormulario.value;
    this.userService.updatePassword(password,token);
    
  }

}
