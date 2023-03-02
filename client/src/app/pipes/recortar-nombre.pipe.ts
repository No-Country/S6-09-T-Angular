import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recortarNombre'
})
export class RecortarNombrePipe implements PipeTransform {

  transform(fullName:string): string {
    
    return fullName.split(' ')[0];
  }

}
