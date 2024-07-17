import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessProfileComponent } from './mess-profile.component';

describe('MessProfileComponent', () => {
  let component: MessProfileComponent;
  let fixture: ComponentFixture<MessProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
