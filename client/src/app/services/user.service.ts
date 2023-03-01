import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResponse, User } from '../interfaces/Auth';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = environment.baseUrl;
  private _user!:User;

  get user(){
    return {...this._user};
  }


  constructor(private http:HttpClient) { }


  getUsers():Observable<User[]>{
    const url  = `${this.baseUrl}/users`;
    return this.http.get<User[]>(url);
  }

  

  getUser(id:string):Observable<User>{
    const url  = `${this.baseUrl}/users/${id}`;
    return this.http.get<User>(url);
  }
}
