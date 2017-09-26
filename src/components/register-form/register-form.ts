import { AngularFireAuth } from 'angularfire2/auth';
import { NavController, ToastController } from 'ionic-angular';
import { Credentials } from './../../app/credentials.model';
import { Component, Injectable } from '@angular/core';

/**
 * Generated class for the RegisterFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'register-form',
  templateUrl: 'register-form.html'
})

@Injectable()
export class RegisterFormComponent {

  credentials:Credentials = {email:"", password:""}

  constructor(
     private navCtrl: NavController,
     private auth:AngularFireAuth,
     private toastCtrl: ToastController
    ) {
  
  }

  register(){
    this.auth.auth.
    createUserWithEmailAndPassword(this.credentials.email, this.credentials.password)
    .then(result=>{
     alert(result)
    }).catch(e=>{
      console.log(e)
      alert(e)
    })
  }

  presentToast(message) {
     this.toastCtrl.create({
      message: message,
      duration: 3000
    }).present();
  }
}
