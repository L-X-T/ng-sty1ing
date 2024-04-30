import { ChangeDetectionStrategy, Component, DOCUMENT, inject } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private sidebarVisible = false;
  private readonly document = inject(DOCUMENT);

  protected onToggleSidebar(): void {
    const body = this.document.getElementsByTagName('body')[0];
    const wrapper = this.document.getElementsByClassName('wrapper')[0];

    if (!this.sidebarVisible) {
      body.classList.add('nav-open');
      wrapper.classList.add('has-sidebar');
      this.sidebarVisible = true;
    } else {
      body.classList.remove('nav-open');
      wrapper.classList.remove('has-sidebar');
      this.sidebarVisible = false;
    }
  }
}
