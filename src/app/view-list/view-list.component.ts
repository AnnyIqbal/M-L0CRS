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
    cgpa: number
  }] = [{name: 'abc', email: 'abc@email.com', contactNum: 123, degreeTitle: 'ABC', cgpa: 9}];

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
      for (let i = 0; i < x.length; i++) { // updates the entire students array each time
        this.students[i] = {  // sync with firebase db
          name: x[i].uname,
          email: x[i].emlid,
          contactNum: x[i].phone,
          degreeTitle: x[i].degreeTitle,
          cgpa: x[i].cgpa
        };
    }
  });
}

  removeCompany(i) {
    this.companies.splice(i, 1);
  }

  removeStudent(i) {
    this.companies.splice(i, 1);
  }

}
