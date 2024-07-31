import { Component, HostListener } from '@angular/core';
import { CardsComponent } from '../../layouts/cards/cards.component';
import e from 'express';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  isFilterClose: boolean = false;
  srcWidth!: any;

  ngOnInit() {
    if ((this.srcWidth = window.screen.width >= 760)) {
      this.isFilterClose = true;
    } else {
      this.isFilterClose = false;
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
