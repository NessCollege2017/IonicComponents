import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import { NavController } from 'ionic-angular';
import { Credentials } from './../../app/credentials.model';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  // The tag name
  selector: 'login',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {

  credentials:Credentials = {email:"", password:""}

  items: Observable<any>
  constructor(private navController: NavController,private db: AngularFireDatabase,  private auth: AngularFireAuth) {
   this.items =  this.db.list('items')

    
  }


  register(){
    this.navController.push('RegisterPage')
  }

  login(){
    this.auth.auth.signInWithEmailAndPassword(this.credentials.email, this.credentials.password)
    .then(r=>{console.log(r)
    alert(r)
    })
    .catch(e=> {console.log(e)
      alert(e.message)
    })
  }
}
