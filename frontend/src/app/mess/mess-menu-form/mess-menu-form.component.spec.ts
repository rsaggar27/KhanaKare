import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessMenuFormComponent } from './mess-menu-form.component';

describe('MessMenuFormComponent', () => {
  let component: MessMenuFormComponent;
  let fixture: ComponentFixture<MessMenuFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessMenuFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessMenuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
