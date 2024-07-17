import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessSettingsComponent } from './mess-settings.component';

describe('MessSettingsComponent', () => {
  let component: MessSettingsComponent;
  let fixture: ComponentFixture<MessSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
