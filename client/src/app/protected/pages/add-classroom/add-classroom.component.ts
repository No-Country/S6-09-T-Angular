import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-classroom',
  templateUrl: './add-classroom.component.html',
  styleUrls: ['./add-classroom.component.scss']
})
export class AddClassroomComponent implements OnInit {

  miFormulario:FormGroup = this.fb.group({
    
  })

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.miFormulario.reset();
  }

  campoNoValido(campo:string) {
    return this.miFormulario.get(campo)?.touched &&
    this.miFormulario.get(campo)?.invalid;
  }


}
