import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {
  nameLower: string = 'Derwing';
  nameUpper: string = 'DERWING';
  fullName: string = 'derWiNg mEDiNa';

  date: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
