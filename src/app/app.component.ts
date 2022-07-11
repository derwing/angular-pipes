import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pipes';

  name: string = 'dErwing mediNa';
  value: number = 1000;

  obj = {
    name: 'derwing'
  };



  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  showProperties() {
    console.log(this.name, this.value, this.obj);
  }
}
