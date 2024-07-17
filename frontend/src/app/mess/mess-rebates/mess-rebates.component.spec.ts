import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessRebatesComponent } from './mess-rebates.component';

describe('MessRebatesComponent', () => {
  let component: MessRebatesComponent;
  let fixture: ComponentFixture<MessRebatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessRebatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessRebatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
