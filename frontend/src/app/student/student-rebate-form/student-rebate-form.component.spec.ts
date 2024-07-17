import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRebateFormComponent } from './student-rebate-form.component';

describe('StudentRebateFormComponent', () => {
  let component: StudentRebateFormComponent;
  let fixture: ComponentFixture<StudentRebateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentRebateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentRebateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
