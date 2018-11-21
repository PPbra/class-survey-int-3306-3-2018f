import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'cs-login-form',
  templateUrl: './cs-login-form.component.html',
  styleUrls: ['./cs-login-form.component.scss']
})
export class CsLoginFormComponent implements OnInit {

  constructor() {
    router: RouterModule
  }

  ngOnInit() {
    let email = document.querySelector('#email') as HTMLInputElement;
    let password = document.querySelector('#password');

    function onEmailInput(e) {

    }

    function onEmailFocus(e) {
      e.target.parentElement.classList.add("focusWithText");
    }

    function onEmailBlur(e) {
      if (e.target.value == "") {
        e.target.parentElement.classList.remove("focusWithText");
      }
    }

    function onPasswordFocus(e) {
      // coverEyes();
    }

    function onPasswordBlur(e) {
      // uncoverEyes();
    }

    email.addEventListener('focus', onEmailFocus);
    email.addEventListener('blur', onEmailBlur);
    email.addEventListener('input', onEmailInput);
    password.addEventListener('focus', onPasswordFocus);
    password.addEventListener('blur', onPasswordBlur);
  }
}
