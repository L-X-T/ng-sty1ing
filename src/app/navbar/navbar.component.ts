import { Component, inject, DOCUMENT } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: 'navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private sidebarVisible = false;
  private readonly document = inject(DOCUMENT);

  onToggleSidebar(): void {
    const body = this.document.getElementsByTagName('body')[0];

    if (!this.sidebarVisible) {
      body.classList.add('nav-open');
      this.sidebarVisible = true;
    } else {
      body.classList.remove('nav-open');
      this.sidebarVisible = false;
    }
  }
}
