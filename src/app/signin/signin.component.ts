import { Observable } from 'rxjs';
// import { select } from 'ng2-redux';
// import { MyActions } from './../store/actions';
import { Component, OnInit } from '@angular/core';
// import { AngularFire } from 'angularfire2';
// import { AngularFireModule, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';
// import { FirebaseAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

// @select(['User', 'status'])
// user$: Observable<any>; // gets User State of the app

  constructor(
      // private af: AngularFire,
      private route: Router,
      // private a: MyActions
    ) {}

  onSignIn(value) {
console.log('sign in')
  }
    /*
    // 'signout' action dispatched from redux
    this.a.signIn(value.eml);

        // this.af.auth.login(); // Google login
        this.af.auth.login(
          {email: value.eml , password: value.pass}, // xyz@todo.com, xyzxyz
          {provider: AuthProviders.Password, method: AuthMethods.Password}
        ).then((res) => {
            alert('Sign In Successful!');
            this.route.navigate(['tasklist']); // navigate to todoapp
        }, (err) => {
            alert(err);
        });
    }
    */
}
