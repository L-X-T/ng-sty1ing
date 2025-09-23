import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lab-08-tailwind',
  imports: [FormsModule],
  templateUrl: './lab-08-tailwind.component.html',
  styleUrl: './lab-08-tailwind.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Lab08TailwindComponent {}
