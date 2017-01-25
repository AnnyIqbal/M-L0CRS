import { Component } from '@angular/core';
import {ActivatedRoute, Router, Routes} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  click: string = 'viewList';
  constructor(private r: Router, private ar: ActivatedRoute){}

}
