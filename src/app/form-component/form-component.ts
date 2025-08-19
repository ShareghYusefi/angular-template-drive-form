import { Component } from '@angular/core';

@Component({
  selector: 'form-component',
  standalone: false,
  templateUrl: './form-component.html',
  styleUrl: './form-component.css',
})
export class FormComponent {
  person = {
    email: '',
    password: '',
    subscribe: false,
  };

  onSubmit() {
    console.log('Form submitted!: ', this.person);
  }
}
