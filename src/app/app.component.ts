import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { select } from 'ng2-redux';
import { MyActions } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  username = 'Abc';
  MenuIcons: string[] = ['MENU', 'HOME', 'DASHBOARD', 'COMPANY', 'STUDENT', 'ADMIN', 'NOTICE BOARD'];
  icons: string[] = ['home', 'dashboard', 'card_travel', 'perm_identity', 'person', 'notifications'];

  constructor(private r: Router, private ar: ActivatedRoute, private af: AngularFire, private a: MyActions){}
  routeTo(x) {
    this.r.navigate([x]);
  }
  SignOut() {
    // 'signout' action dispatched from redux
    this.a.signOut();
    this.af.auth.logout();
    this.r.navigate(['home']); // navigate back to home page
    alert('Please Sign In to continue...');
  }
}
