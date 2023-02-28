import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { ClassroomService } from '../../../services/classroom.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';


@Component({
  selector: 'app-add-classroom',
  templateUrl: './add-classroom.component.html',
  styleUrls: ['./add-classroom.component.scss']
})
export class AddClassroomComponent implements OnInit {

  // classroom_name
  //   category
  //   aula
  //   user_id

  miFormulario:FormGroup = this.fb.group({
    classroom_name:['algebra',[Validators.required, Validators.maxLength(20)]],
    category:['matematicas',[Validators.required, Validators.maxLength(20)]],
    aula:['3-02',[Validators.required, Validators.maxLength(20)]],
    
  })

  constructor(private fb:FormBuilder,
              private router:Router,
              private classroomService:ClassroomService){}

  ngOnInit(): void {
    // this.miFormulario.reset();
  }

  campoNoValido(campo:string) {
    return this.miFormulario.get(campo)?.touched &&
    this.miFormulario.get(campo)?.invalid;
  }

  guardar(){

    let data = JSON.parse(localStorage.getItem('data')!);
    let user = data.user;

    const {classroom_name, category, aula} = this.miFormulario.value;

        this.classroomService.saveClassroom(user,classroom_name,category,aula);
        
  }



}
