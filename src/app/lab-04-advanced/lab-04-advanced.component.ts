import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lab-04-advanced',
  imports: [FormsModule],
  templateUrl: './lab-04-advanced.component.html',
  styleUrl: './lab-04-advanced.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Lab04AdvancedComponent {}
