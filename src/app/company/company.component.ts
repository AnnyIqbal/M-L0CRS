import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
  click: string = 'viewList';
  isAdmin: boolean = false;
  isStd: boolean = false;
  isCompany: boolean = true;
  // @Output() changeTab = new EventEmitter<any>();

  // out(event: any) {
  //   this.changeTab.emit(event);
  // }

}
