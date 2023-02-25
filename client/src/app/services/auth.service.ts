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
  private _user!:User;
  
  
  get usuario(){
    return {...this._user};
  }

constructor(private http:HttpClient,
              private router:Router) { }


  register(name:string, email:string, password:string){
    const url  = `${this.baseUrl}/users`;
    const body = {name,email,password};

    return this.http.post<AuthResponse>(url,body)
    .pipe(
      tap(({valid, token}) =>{
        if( valid ){
          localStorage.setItem('token', token!)
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
            localStorage.setItem('token',resp.token!)
            this._user = {
              _id : resp.user._id,
              name: resp.user.name,
              email:resp.user.email,
              valid: true
            }
            console.log(this._user);            
          } 
        }),
        map(resp => resp.valid),
        catchError(err => of(err.error.msg))
      )
  }


  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('inicio');
  }

  validarToken(): Observable<boolean> {
    if(localStorage.getItem('token') !== null){
      return of(true);
    }else{
      return of(false);
    }
    
  }

}
