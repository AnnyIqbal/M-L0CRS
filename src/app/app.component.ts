import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  MenuIcons: string[] = ['MENU', 'HOME', 'DASHBOARD', 'BOOK', 'ISSUE A BOOK', 'RATE A BOOK', 'BOOK SHELF', 'LIBRARY', 'NOTICE BOARD'];
  icons: string[] = [
    'home', 'dashboard', 'book', 'add_shopping_cart', 'favorite', 'shopping_cart', 'account_balance', 'notifications'
  ]; //<i class="material-icons">card_travel</i> co.

  constructor(private r: Router, private ar: ActivatedRoute){}
  routeTo(x) {
    this.r.navigate([x]);
  }
}
