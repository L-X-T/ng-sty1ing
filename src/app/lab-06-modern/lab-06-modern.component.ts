import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-lab-06-modern',
  imports: [],
  templateUrl: './lab-06-modern.component.html',
  styleUrl: './lab-06-modern.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Lab06ModernComponent {
  protected readonly expanded = signal(false);

  protected onToggleSide(): void {
    this.expanded.update((expanded) => !expanded);
  }
}
