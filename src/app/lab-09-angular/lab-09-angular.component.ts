import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-lab-09-angular',
  imports: [],
  templateUrl: './lab-09-angular.component.html',
  styleUrl: './lab-09-angular.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Lab09AngularComponent {}
