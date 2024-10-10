import { Component } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-feedback-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './student-feedback-form.component.html',
  styleUrl: './student-feedback-form.component.css'
})
export class StudentFeedbackFormComponent{
  
  feedbackForm: FormGroup;

  constructor(private fb: FormBuilder, private studentObj:StudentService) {
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      sid: ['', [Validators.required, Validators.pattern('^[0-9]+$')]], // Assuming SID is numeric
      feedback: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.feedbackForm.valid) {
      console.log(this.feedbackForm.value);
      this.studentObj.doAddFeedback(this.feedbackForm.value).subscribe((respJson:any)=>{
        console.log(respJson);
      })
    }
  }
}
