import { Component, OnInit } from '@angular/core';
import { ClassroomService } from '../../../services/classroom.service';
import { ClassroomResponse } from '../../../interfaces/Classroom';
import { UserService } from 'src/app/services/user.service';
import { map } from 'rxjs';
import { User } from 'src/app/interfaces/Auth';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss']
})
export class ClassroomComponent implements OnInit {

  listadoClassrooms: ClassroomResponse[] = [];
  
  constructor(private classroomService:ClassroomService,
              private userService:UserService){}


  ngOnInit(): void {
    this.classroomService.getClassroom().subscribe(classrooms => {
      this.listadoClassrooms = classrooms
      });
    
  }

  

}
