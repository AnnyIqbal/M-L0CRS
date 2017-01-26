import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent {

  @Input() isAdmin: boolean;
  @Input() isStd: boolean;
  @Input() isCompany: boolean;

  students: [
    {
    name: string,
    gender: string,
    degreeTitle: string,
    cgpa: number,
    yearOfPassing: number
  }];

  companies: [
  {
    jobtitle: string,
    name: string,
    location: string,
    numberOfVacancies: number
  }];

constructor() {
  console.log(this.isAdmin);
}

  removeCompany(i) {
    this.companies.splice(i, 1);
  }

  removeStudent(i) {
    this.companies.splice(i, 1);
  }

  viewDetails(i) {
    //todo
  }
}
