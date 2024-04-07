import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab04AdvancedComponent } from './lab-04-advanced.component';

describe('Lab04AdvancedComponent', () => {
  let component: Lab04AdvancedComponent;
  let fixture: ComponentFixture<Lab04AdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lab04AdvancedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Lab04AdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
