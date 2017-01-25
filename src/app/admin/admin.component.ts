import { Component } from '@angular/core';
import {ActivatedRoute, Router, Routes} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private r: Router, private ar: ActivatedRoute){}
  routeTo(x) {
    this.r.navigate([ { outlets: { main: x } }]);
  }

}
