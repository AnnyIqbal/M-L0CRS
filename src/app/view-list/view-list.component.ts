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

  // students: [string] = ['Anny', 'Sadaf'] ;
  // companies: [string] = ['Panacloud', 'Pasha'] ;
  students: [
    {
    name: string,
    gender: string,
    degreeTitle: string,
    cgpa: number,
    yearOfPassing: number
  }];
  //   {
  //     name: 'Anny',
  //     gender: 'Female',
  //     degreeTitle: 'MBA',
  //     cgpa: 3.56,
  //     yearOfPassing: 2014
  //   }
  // ];

  companies: [
  {
    name: string,
    domain: string,
    architecture: string,
    location: string,
    numberOfVacancies: number
  }];
  //   {
  //     name: 'ABC Pvt. Ltd.',
  //     domain: 'event planners',
  //     architecture: 'company',
  //     location: 'DHA',
  //     numberOfVacancies: 5
  //   }
  // ];
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
    
  }
}
