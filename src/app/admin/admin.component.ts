import { Component, Output, EventEmitter } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  click: string = 'viewList';
  @Output() changeTab = new EventEmitter<any>();

  out(event: any) {
    this.changeTab.emit(event);
  }
}
