import { Component, Input, Output, EventEmitter } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  click: string = 'viewList';
  isAdmin: boolean = true;
  isStd: boolean = false;
  isCompany: boolean = false;
  @Output() changeTab = new EventEmitter<any>();

  out(event: any) {
    this.changeTab.emit(event);
  }
}
