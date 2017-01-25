import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent {

  @Output() changeTab = new EventEmitter<any>();

  SignUp(user, event) {
    console.log('company signup');
    this.changeTab.emit(event);
  }
}
