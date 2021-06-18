import { Component } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
})
export class PersonsComponent {
  isDisabled = false;
  message = 'Ninguna persona agregada';
  title = '';
  storePerson() {
    this.message = 'Persona agregada';
  }
  // editTitle(event: Event) {
  //   this.title = (<HTMLInputElement>event.target).value;
  // }
}
