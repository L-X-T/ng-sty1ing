import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab09AngularComponent } from './lab-09-angular.component';

describe('Lab09AngularComponent', () => {
  let component: Lab09AngularComponent;
  let fixture: ComponentFixture<Lab09AngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lab09AngularComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Lab09AngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
