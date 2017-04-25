import { Component } from '@angular/core';

@Component({
  selector: 'LiveAuction-hello-world',
  template: 'Hello world from the {{ projectTitle }} module!'
})
export class HelloWorldComponent {
  projectTitle: string = 'live auction ui';
}
