import { Component, HostListener, Input } from '@angular/core';
import { CardsComponent } from '../../layouts/cards/cards.component';
import { CommonModule } from '@angular/common';
import { restaurantData } from '../../Data/dummy-data';
import { FilterPipe } from '../../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CardsComponent,
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    FilterPipe,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  isFilterClose: boolean = false;
  srcWidth!: any;
  searchText!: string;
  @Input() restaurantInfo = restaurantData;
  navCount!: number[];
  currentPage: number = 1;
  pageCount!: number;

  ngOnInit() {
    this.pageCount = Math.ceil(this.restaurantInfo.length / 6);

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
      this.navCount = this.range(1, this.pageCount);
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
  prevPage(): void {
    const toText = this.pageCount.toString();
    const lastChar = toText.slice(-1);
    const lastDigit = +lastChar;
    const toNumber = Number(lastDigit);
    // GET THE LAST PAGE

    if (this.currentPage <= 1) {
      this.currentPage = toNumber + 1;
    }
    this.currentPage = this.currentPage - 1;
  }

  nextPage(): void {
    if (this.currentPage === this.pageCount) {
      this.currentPage = 1;
    } else {
      this.currentPage = this.currentPage + 1;
    }
  }

  range(start: number, end: number): number[] {
    return [...Array(end).keys()].map((el) => el + start);
  }
}
