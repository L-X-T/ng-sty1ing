import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab03EssentialsComponent } from './lab-03-essentials.component';

describe('Lab03EssentialsComponent', () => {
  let component: Lab03EssentialsComponent;
  let fixture: ComponentFixture<Lab03EssentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lab03EssentialsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Lab03EssentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
