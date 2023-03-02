import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse, User } from '../interfaces/Auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  
constructor(private http:HttpClient,
              private router:Router) { }


  register(name:string, email:string, password:string){
    const url  = `${this.baseUrl}/users`;
    const body = {name,email,password};

    return this.http.post<AuthResponse>(url,body)
    .pipe(
      tap(resp => {
        if( resp.valid ){
          let data = {'token': resp.token, 'user':resp.user._id}
          sessionStorage.setItem('data', JSON.stringify(data));
          }
      }),
      map(resp => resp.valid),
      catchError(err => of(err.error.msg))
      ); 
  }

  login(email:string,password:string){
    const url = `${this.baseUrl}/login`;
    const body = {email, password};

    return this.http.post<AuthResponse>(url,body)
      .pipe(
        tap(resp => {
          if(resp.valid){
            let data = {'token': resp.token, 'user':resp.user._id}
            sessionStorage.setItem('data', JSON.stringify(data));
                     
          } 
        }),
        map(resp => resp.valid),
        catchError(err => of(err.error.msg))
      )
  }


  logout(){
    sessionStorage.removeItem('data');
    this.router.navigateByUrl('inicio');
  }

  validarToken(): Observable<boolean> {
    if(sessionStorage.getItem('data') !== null){
      return of(true);
    }else{
      return of(false);
    }
    
  }

  // buscarUsuario(user:string){
    
    
  //   this._user = {
  //     _id : resp.user._id,
  //     name: resp.user.name,
  //     email:resp.user.email,
  //     valid: true
  //   }
  //   console.log(this._user);   
  // }

}
