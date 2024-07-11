import { Component } from '@angular/core';
import { CardsComponent } from '../../layouts/cards/cards.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CardsComponent],
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
