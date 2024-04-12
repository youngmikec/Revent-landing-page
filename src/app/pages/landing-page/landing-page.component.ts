import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('Enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1}))
      ]),
    ]),
  ],
})
export class LandingPageComponent {
  isVisible: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    // Logic to check if section is in view based on scroll position
    const sectionElement: any = document.querySelector('.flex-layout');
    const sectionPosition = sectionElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionPosition < windowHeight) {
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
