import { Component, HostListener, Input } from '@angular/core';
import { CardsComponent } from '../../layouts/cards/cards.component';
import { CommonModule } from '@angular/common';
import { restaurantData } from '../../Data/dummy-data';
import { log } from 'node:console';

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
  navCount!: number[];
  currentPage!: number;

  ngOnInit() {
    if (typeof window !== 'undefined') {
      if ((this.srcWidth = window.screen.width >= 760)) {
        this.isFilterClose = true;
      } else {
        this.isFilterClose = false;
      }
    }

    if (this.restaurantInfo.length < 6) {
      this.navCount = this.range(1, 1);
    } else {
      const pageCount = Math.ceil(this.restaurantInfo.length / 6);

      this.navCount = this.range(1, pageCount);
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event: Event) {
    this.srcWidth = window.innerWidth;

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

  changePage(page: any): void {
    this.currentPage = page;
  }

  range(start: number, end: number): number[] {
    return [...Array(end).keys()].map((el) => el + start);
  }
}
