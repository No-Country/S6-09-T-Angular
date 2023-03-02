import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthResponse, User, ResetPasswordResponse } from '../interfaces/Auth';
import { environment } from 'src/environments/environment';
import { catchError, map, Observable, of, tap } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = environment.baseUrl;
  private _user!:User;

  get user(){
    return {...this._user};
  }


  constructor(private http:HttpClient,
              private router:Router) { }


  getUsers():Observable<AuthResponse[]>{
    const url  = `${this.baseUrl}/users`;
    return this.http.get<AuthResponse[]>(url);
  }

  
  getUser(id:string):Observable<User>{
    const url  = `${this.baseUrl}/users/${id}`;
    return this.http.get<User>(url);
  }

  
  resetPassword(email:string){
    const url  = `${this.baseUrl}/users/passworReset`;
    const body = {email};
    return this.http.post<ResetPasswordResponse>(url, body)
    .subscribe(resp => {
      if(resp.valid){
        Swal.fire({
          icon:'success',
          title:'Email de recuperacion enviado',
          showConfirmButton:true,
          confirmButtonColor: '#18619b',
        })

        this.router.navigateByUrl('/auth/login');
      }else{
        Swal.fire({
          icon:'error',
          title:'Usuario no encontrado',
          showConfirmButton:true,
          confirmButtonColor: '#18619b',
        })
      } 
    })
    }  

updatePassword(password:string,token:string){
  const url = `${this.baseUrl}/passwordUpdate`;
  const body = {password,token};

  const headers = new HttpHeaders({
    'Content-Type':'application/json',
    'Authorization':`Bearer ${token}`
  });

  const options = {headers: headers};

  console.log(body);
  
  return this.http.patch<ResetPasswordResponse>(url, body, options) 
  .subscribe(resp => {
    if(resp.valid){
      Swal.fire({
        icon:'success',
        title:'Contraseña actualizada',
        showConfirmButton:true,
        confirmButtonColor: '#18619b',
      })

      this.router.navigateByUrl('/auth/login');
    }else{
      Swal.fire({
        icon:'error',
        title:'Error',
        showConfirmButton:true,
        confirmButtonColor: '#18619b',
      })
    } 
  })
}



}

