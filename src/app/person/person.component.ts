import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent {
  name: string = 'Álvaro';
  lastname: string = 'Barrera';
  year: number = 21;
  // VARIABLES PRIVADAS
  // private year: number = 21;
  // getEdad(): number{
  //   return this.year;
  // }
}
