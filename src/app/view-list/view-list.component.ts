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

constructor(private af: AngularFire) {
  this.item = this.af.database.list('/students');
  console.log(this.item);
  this.item.push({name: 'anny', email: 'anny@gmail.com', phone: 111, degTitle: 'MBA', cgpa: 3.56});
  console.log(this.item)
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
