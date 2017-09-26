import { NavController } from 'ionic-angular';
import { Credentials } from './../../app/credentials.model';
import { Component } from '@angular/core';

@Component({
  // The tag name
  selector: 'login',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {

  credentials:Credentials = {email:"", password:""}

  constructor(private navController: NavController) {

  }


  register(){
    this.navController.push('RegisterPage')
  }

  login(){
    console.log('Login')
  }
}
