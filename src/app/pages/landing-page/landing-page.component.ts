import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  isFilterClose: boolean = false;

  showFilter(): void {
    this.isFilterClose = !this.isFilterClose;
  }

  closeNav(): void {
    this.isFilterClose = !this.isFilterClose;
  }
}
