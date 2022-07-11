import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { TapObserver } from 'rxjs/internal/operators/tap';

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styles: [
  ]
})
export class NotCommonsComponent {
  // i18nSelect
  name: string = 'Fernando';
  gender: string = 'male';
  invitationMap = {
    'male': 'invitarlO',
    'female': 'invitarlA'
  };
  // i18nPlural
  clients: string[] = ['Derwing', 'Gabriela', 'Luna', 'Diego'];
  clientMaps = {
    '=0': "'We don't have any client waiting'",
    '=1': "We have one client waiting",
    'other': "We have # clients waiting",
  }

  // HeyValuePipe
  people = {
    name: 'Fernando',
    age: 35,
    address: 'Ottawa, Canadá'
  }

  // JSON Pipe
  heroes = [
    {
      name: 'Superman',
      fly: true
    },
    {
      name: 'Robin',
      fly: false
    },
    {
      name: 'Acuaman',
      fly: false
    }
  ];

  // AsyncPipe
  myObservable = interval(2000); // emit 0,1,2,3,4...

  promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('We have promise data');
    }, 3500)
  });

  changeName() {
    if (this.name === 'Fernando') {
      this.name = 'Susana';
      this.gender = 'female';
    } else if (this.name === 'Susana') {
      this.name = 'Fernando';
      this.gender = 'male'
    }
  }

  removeClients() {
    if (this.clients.length > 0) {
      this.clients.pop();
    }
  }
}
