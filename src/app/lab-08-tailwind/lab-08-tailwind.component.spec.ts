import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab08TailwindComponent } from './lab-08-tailwind.component';

describe('Lab08TailwindComponent', () => {
  let component: Lab08TailwindComponent;
  let fixture: ComponentFixture<Lab08TailwindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lab08TailwindComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Lab08TailwindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
