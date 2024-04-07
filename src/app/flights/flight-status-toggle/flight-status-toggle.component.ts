import { ChangeDetectionStrategy, Component, model } from '@angular/core';

@Component({
  selector: 'app-flight-status-toggle',
  templateUrl: './flight-status-toggle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightStatusToggleComponent {
  // readonly status = input.required<boolean>();
  // readonly statusChange = output<boolean>();
  readonly status = model.required<boolean>();

  onToggle(): void {
    this.status.set(!this.status());
  }
}
