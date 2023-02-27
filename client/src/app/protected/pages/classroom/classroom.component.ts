import { Component, OnInit } from '@angular/core';
import { ClassroomService } from '../../../services/classroom.service';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss']
})
export class ClassroomComponent implements OnInit {

  constructor(private classroomService:ClassroomService){}


  ngOnInit(): void {
    
    this.classroomService.getClassroom()
    .subscribe(resp => {
      console.log(resp);
      
    })
    
    
    

  }


}
