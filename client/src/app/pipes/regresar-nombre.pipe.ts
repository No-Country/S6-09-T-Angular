import { Pipe, PipeTransform } from '@angular/core';
import { UserService } from '../services/user.service';
import { map, tap, Observable } from 'rxjs';
import { User } from '../interfaces/Auth';

@Pipe({
  name: 'regresarNombre'
})
export class RegresarNombrePipe implements PipeTransform {

  nombre! : string;

  constructor(private userService:UserService){

  }

  transform(value: string): any{
    this.userService.getUser(value)
      .subscribe(resp => {
        return this.nombre = resp.name!;
    });
    
    
  }

}
