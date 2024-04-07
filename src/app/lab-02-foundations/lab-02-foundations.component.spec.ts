import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab02FoundationsComponent } from './lab-02-foundations.component';

describe('Lab02FoundationsComponent', () => {
  let component: Lab02FoundationsComponent;
  let fixture: ComponentFixture<Lab02FoundationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lab02FoundationsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Lab02FoundationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
