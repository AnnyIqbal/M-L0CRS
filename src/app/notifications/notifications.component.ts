import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {

  notifications: string[] = ['first notification on notice board'];
  list: boolean = true;
  @Input() isAdmin: boolean;

  AddNotice(newNotice) {
    this.notifications.push(newNotice);
    this.list = true;
  }

}
