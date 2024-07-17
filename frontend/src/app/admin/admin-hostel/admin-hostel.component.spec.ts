import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHostelComponent } from './admin-hostel.component';

describe('AdminHostelComponent', () => {
  let component: AdminHostelComponent;
  let fixture: ComponentFixture<AdminHostelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminHostelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminHostelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
