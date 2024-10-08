import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMessComponent } from './admin-mess.component';

describe('AdminMessComponent', () => {
  let component: AdminMessComponent;
  let fixture: ComponentFixture<AdminMessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminMessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminMessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
