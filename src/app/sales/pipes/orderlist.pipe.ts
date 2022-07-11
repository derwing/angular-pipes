import { Heroe } from './../../interfaces/heroe.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderlist'
})
export class OrderlistPipe implements PipeTransform {

  transform(heroes: Heroe[], orderBy: String = 'noValue'): Heroe[] {

    console.log(heroes);

    switch (orderBy) {
      case 'name':
        return heroes.sort((a, b) =>
          (a.name > b.name) ? 1 : -1);

      case 'fly':
        return heroes.sort((a, b) =>
          (a.fly > b.fly) ? -1 : 1);

      case 'color':
        return heroes.sort((a, b) =>
          (a.color > b.color) ? 1 : -1);


      default:
        return heroes;
    }

  }

}
