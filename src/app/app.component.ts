import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  name: string = 'dErwing mediNa';
  value: number = 1000;

  obj = {
    name: 'derwing'
  };

  showProperties() {
    console.log(this.name, this.value, this.obj);
  }
}
