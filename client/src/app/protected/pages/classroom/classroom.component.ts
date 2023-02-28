import { Component, OnInit } from '@angular/core';
import { ClassroomService } from '../../../services/classroom.service';
import { ClassroomResponse } from '../../../interfaces/Classroom';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss']
})
export class ClassroomComponent implements OnInit {

  listadoClassrooms: ClassroomResponse[] = [];

  constructor(private classroomService:ClassroomService){}


  ngOnInit(): void {
    this.classroomService.getClassroom().subscribe(classrooms => this.listadoClassrooms = classrooms);
  }


}
