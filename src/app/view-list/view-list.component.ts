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

  students: [
    {
    name: string,
    email: string,
    contactNum: number
    degreeTitle: string,
    cgpa: number
  }];

  companies: [
  {
    jobtitle: string,
    name: string,
    location: string,
    numberOfVacancies: number
  }];
a: string = 'id1';
constructor(private af: AngularFire) {
  this.item = af.database.list('/students');
this.item.update(this.a, {index: this.students});
}

  removeCompany(i) {
    this.companies.splice(i, 1);
  }

  removeStudent(i) {
    this.companies.splice(i, 1);
  }

  viewDetails(i) {
    
  }
}
