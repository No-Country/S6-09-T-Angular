import { Injectable } from '@angular/core';
import { CanActivate, CanMatch, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanMatch {
  
  constructor(private authService:AuthService,
              private router:Router){}
  
  canActivate(): Observable<boolean> | boolean {
    return this.authService.validarToken()
      .pipe(
        tap(valid => {
          if(!valid){
            this.router.navigateByUrl('/auth');
          }
        })
      )
  }
  canMatch(): Observable<boolean> | boolean {
    return this.authService.validarToken()
      .pipe(
        tap(valid => {
          if(!valid){
            this.router.navigateByUrl('/auth');
          }
        })
      )
  }
}
