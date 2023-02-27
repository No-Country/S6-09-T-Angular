import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ClassroomResponse } from '../interfaces/Classroom';


@Injectable({
  providedIn: 'root'
})
export class ClassroomService implements OnInit {

  private baseUrl: string = environment.baseUrl;
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
  }

  getClassroom(){

    let data = JSON.parse(localStorage.getItem('data')!);

    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':`Bearer ${data.token}`
    });

    const requestOptions = {headers: headers}; 
    const url  = `${this.baseUrl}/classroom/all`;

    return this.http.get<ClassroomResponse>(url, requestOptions);

  }
}
