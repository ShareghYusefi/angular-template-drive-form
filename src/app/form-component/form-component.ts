import { Component } from '@angular/core';

@Component({
  selector: 'form-component',
  standalone: false,
  templateUrl: './form-component.html',
  styleUrl: './form-component.css',
})
export class FormComponent {
  onSubmit(form: any) {
    console.log('Form submitted!: ', form.value);
  }
}
