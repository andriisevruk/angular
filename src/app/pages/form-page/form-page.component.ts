import { Component } from '@angular/core';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent {

  showLoginForm: boolean = true;
  buttonText: string = "Register"

  toggleForm() {
    this.showLoginForm = !this.showLoginForm;
    this.buttonText = this.showLoginForm ? "Register" : "Login"
  }

}
