// import { MyActions } from './../store/actions';
import { Observable } from 'rxjs';
// import { select } from 'ng2-redux';
import { Component } from '@angular/core';
// import { AngularFire } from 'angularfire2';
import { Router, ActivatedRoute } from '@angular/router';
// import { FirebaseAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

// @select(['User', 'status'])
// user$: Observable<any>;

  index: number;
  constructor(
    // private af: AngularFire,
    private route: Router,
    private ar: ActivatedRoute,
    // private a: MyActions
  ) {}

  SignUp(user, userType) {
    console.log('signup copmonent', userType);
    this.routeTo('person');
    if (userType === 'Company') {
      this.index = 1;
    }
    else if (userType === 'Student') {
      this.index = 2;
    }
  }

  routeTo(x) {
    this.route.navigate([x], { queryParams: {index: this.index} } );
  }

/*
    // 'signup' action dispatched from redux
    this.a.signUp(user);

    // this.createNewUser(user);
    alert(` Hi ${user.uname}, Welcome to the To Do App! `);
    this.af.auth.createUser(
      { email: user.emlid, password: user.pcode }
    );
    this.route.navigate(['tasklist']); //navigate to todoapp
  }
  */
}
