import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse, User } from '../interfaces/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _user!:User;

  get usuario(){
    return {...this._user};
  }

  constructor(private http:HttpClient) { }

  login(email:string,password:string){
    const url = `${this.baseUrl}/login`;
    const body = {email, password};

    return this.http.post<AuthResponse>(url,body)
      .pipe(
        tap(resp => {
          if(resp.valid){
            localStorage.setItem('token',resp.token!)
          } 
        }),
        map(resp => resp.valid),
        catchError(err => of(err.error.msg))
      )
  }

}
