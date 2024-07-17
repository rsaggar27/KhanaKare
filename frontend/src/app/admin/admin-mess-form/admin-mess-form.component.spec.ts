import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMessFormComponent } from './admin-mess-form.component';

describe('AdminMessFormComponent', () => {
  let component: AdminMessFormComponent;
  let fixture: ComponentFixture<AdminMessFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminMessFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminMessFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
