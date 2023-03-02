import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ClassroomResponse, ChatResponse } from '../interfaces/Classroom';
import { Observable, tap, map, catchError, of } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ClassroomService implements OnInit {

  private baseUrl: string = environment.baseUrl;
    
  constructor(private http:HttpClient,
              private router:Router) { }

  
  ngOnInit(): void {}

  
  
  
  getClassroom():Observable<ClassroomResponse[]>{

    let data = JSON.parse(sessionStorage.getItem('data')!);

    let token = data.token;

    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':`Bearer ${token}`
    });

    const requestOptions = {headers: headers}; 
    const url  = `${this.baseUrl}/classroom/all`;

    return this.http.get<ClassroomResponse[]>(url, requestOptions);

  }

  
  
  saveClassroom(user_id:string, classroom_name:string, category:string, aula:string){
    
    let data = JSON.parse(sessionStorage.getItem('data')!);

    let token = data.token;

    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':`Bearer ${token}`
    });

    const requestOptions = {headers: headers};

    const url  = `${this.baseUrl}/classroom/create`;
    
    const body = {user_id, classroom_name, category, aula};

    // console.log(body);
    
    return this.http.post<ClassroomResponse>(url, body, requestOptions)
      .subscribe(resp => {
        if(resp.valid){
          Swal.fire({
            icon:'success',
            title:'Classroom creado',
            showConfirmButton:true,
            confirmButtonColor: '#18619b',
          })

          this.router.navigateByUrl('/dashboard/classroom');
        }
      })
    
      
  }


  getAllMessages(classroom:string) {
    const url  = `${this.baseUrl}/classroom/classroom/${classroom}`;
    return this.http.get<ChatResponse>(url);
    
      
  }
  



  
}
