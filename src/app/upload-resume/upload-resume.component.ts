import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload-resume',
  templateUrl: './upload-resume.component.html',
  styleUrls: ['./upload-resume.component.css']
})
export class UploadResumeComponent  {

  @Output() changeTab = new EventEmitter<any>();

  UploadResume(formValue, event) {
    alert('Congrats! Profile Created & Resume Uploaded');
    this.changeTab.emit(event);
  }

}
