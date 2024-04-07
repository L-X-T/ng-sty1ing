import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab05ResponsiveComponent } from './lab-05-responsive.component';

describe('Lab05ResponsiveComponent', () => {
  let component: Lab05ResponsiveComponent;
  let fixture: ComponentFixture<Lab05ResponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lab05ResponsiveComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Lab05ResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
