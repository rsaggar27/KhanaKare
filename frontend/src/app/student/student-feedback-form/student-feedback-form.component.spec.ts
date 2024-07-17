import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFeedbackFormComponent } from './student-feedback-form.component';

describe('StudentFeedbackFormComponent', () => {
  let component: StudentFeedbackFormComponent;
  let fixture: ComponentFixture<StudentFeedbackFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentFeedbackFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentFeedbackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
