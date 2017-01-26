import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  click: string = 'viewList';
  isAdmin: boolean = false;
  isStd: boolean = true;
  isCompany: boolean = false;

  // @Output() changeTab = new EventEmitter<any>();

  // out(event: any) {
  //   this.changeTab.emit(event);
  // }

}
