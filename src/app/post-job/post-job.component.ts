import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent {

  @Output() changeTab = new EventEmitter<any>();

  PostJob(formValue, event) {
    alert('Job Successfully Posted');
    this.changeTab.emit(event);
  }
}
