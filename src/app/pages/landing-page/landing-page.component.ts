import { Component, HostListener, Input } from '@angular/core';
import { CardsComponent } from '../../layouts/cards/cards.component';
import { CommonModule } from '@angular/common';
import { restaurantData } from '../../Data/dummy-data';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CardsComponent, CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  isFilterClose: boolean = false;
  srcWidth!: any;
  @Input() restaurantInfo = restaurantData;

  ngOnInit() {
    if (typeof window !== 'undefined') {
      if ((this.srcWidth = window.screen.width >= 760)) {
        this.isFilterClose = true;
      } else {
        this.isFilterClose = false;
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event: Event) {
    this.srcWidth = window.innerWidth;

    console.log(this.srcWidth);

    if (this.srcWidth >= 760) {
      this.isFilterClose = true;
    } else {
      this.isFilterClose = false;
    }
  }

  showFilter(): void {
    this.isFilterClose = true;
  }

  closeNav(): void {
    this.isFilterClose = false;
  }
}
