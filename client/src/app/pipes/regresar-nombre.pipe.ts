import { Pipe, PipeTransform } from '@angular/core';
import { UserService } from '../services/user.service';
import { map } from 'rxjs';

@Pipe({
  name: 'regresarNombre'
})
export class RegresarNombrePipe implements PipeTransform {

  constructor(private userService:UserService){

  }

  transform(value: string): any{
   
    return this.userService.getUser(value)
      .pipe(
        map(user => {
          return user.name
        })
      );

  }
}
