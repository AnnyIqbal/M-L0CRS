import { Component, Output, EventEmitter } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-upload-resume',
  templateUrl: './upload-resume.component.html',
  styleUrls: ['./upload-resume.component.css']
})
export class UploadResumeComponent  {

  @Output() changeTab = new EventEmitter<any>();
  std: FirebaseListObservable<any> ;

constructor(private af: AngularFire) {}

  UploadResume(formValue, event) {
    this.std = this.af.database.list('/students');
    this.std.push(formValue); // formvalue is pushed into the db
    // console.log(formValue);
    alert('Congrats! Profile Created & Resume Uploaded');
    this.changeTab.emit(event);
  }

}
