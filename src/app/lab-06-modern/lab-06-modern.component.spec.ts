import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab06ModernComponent } from './lab-06-modern.component';

describe('Lab06ModernComponent', () => {
  let component: Lab06ModernComponent;
  let fixture: ComponentFixture<Lab06ModernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lab06ModernComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Lab06ModernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
