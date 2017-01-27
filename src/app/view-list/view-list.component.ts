import { Component, Input } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent {

  @Input() isAdmin: boolean;
  @Input() isStd: boolean;
  @Input() isCompany: boolean;

  item: FirebaseListObservable<any> ;
  
  students: [{
    name: string,
    email: string,
    contactNum: number,
    degreeTitle: string,
    cgpa: number,
    key: string
  }] = [{name: 'abc', email: 'abc@email.com', contactNum: 123, degreeTitle: 'ABC', cgpa: 9, key: '0'}];

  companies: [
  {
    jobtitle: string,
    name: string,
    location: string,
    numberOfVacancies: number
  }];

constructor(private af: AngularFire) {
  this.item = this.af.database.list('/students');
  this.item.subscribe(
    (x) => {
      for (let i = 0; i < x.length; i++) {
        this.students[i] = {
          name: x[i].uname,
          email: x[i].emlid,
          contactNum: x[i].phone,
          degreeTitle: x[i].degreeTitle,
          cgpa: x[i].cgpa,
          key: x[i].$key
        };
    }
  });

}

  removeCompany(i) {
    this.companies.splice(i, 1);
  }
// chk for subscription, 2 subscriptions independent hoti hn therefore remove wali is not sync with render wali :(
  removeStudent(key) { // db key is received as 'key'
    this.item.subscribe( x => this.item.remove(key) ); // node specified by the key is deleted from the db
    alert('Success! Admin removed the student.');
  }

}
