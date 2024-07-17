import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHostelFormComponent } from './admin-hostel-form.component';

describe('AdminHostelFormComponent', () => {
  let component: AdminHostelFormComponent;
  let fixture: ComponentFixture<AdminHostelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminHostelFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminHostelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
