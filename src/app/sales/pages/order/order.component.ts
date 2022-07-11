import { Color, Heroe } from './../../../interfaces/heroe.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {
  orderBy: string = 'name';
  upperCase: boolean = true;
  heroes: Heroe[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.black
    },
    {
      name: 'Robin',
      fly: false,
      color: Color.red
    },
    {
      name: 'Daredevil',
      fly: false,
      color: Color.red
    },
    {
      name: 'Green lantern',
      fly: true,
      color: Color.blue
    }
  ]


  changeCase() {
    this.upperCase = !this.upperCase;
  }

  changeOrder(value: string) {
    this.orderBy = value;
  }



}
