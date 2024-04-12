import { Component, HostListener } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  isVisible: boolean = true;

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    // Logic to check if section is in view based on scroll position
    const sectionElement: any = document.querySelector('.hero-bg');
    const sectionPosition = sectionElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionPosition === 650) {
        this.isVisible = true;
    } else {
        this.isVisible = false;
    }

  }

  ngOnInit(): void {
    // Initialize visibility based on initial scroll position
    this.onScroll();
}
}
