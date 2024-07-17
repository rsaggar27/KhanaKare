import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessDashComponent } from './mess-dash.component';

describe('MessDashComponent', () => {
  let component: MessDashComponent;
  let fixture: ComponentFixture<MessDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessDashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
