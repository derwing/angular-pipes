import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {
  color: string = '';

  transform(value: number): string {
    switch (value) {
      case 0:
        this.color = 'red'
        break;
      case 1:
        this.color = 'black'
        break;
      case 2:
        this.color = 'blue'
        break;
      case 3:
        this.color = 'green'
        break;

      default:
        break;
    }
    return this.color;
  }

}
