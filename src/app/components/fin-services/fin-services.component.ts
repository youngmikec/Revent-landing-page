import { Component } from '@angular/core';

interface FinService{
  title: string;
  description: string;
  imgSrc: string;
}

@Component({
  selector: 'app-fin-services',
  templateUrl: './fin-services.component.html',
  styleUrls: ['./fin-services.component.scss']
})
export class FinServicesComponent {
  finSerices: FinService[] = [
    {
      title: 'Quick & Instant',
      description: 'We provide you with a faster approach to applying for a loan. As mentioned earlier, you will get your loan within 24 hours.',
      imgSrc: 'assets/images/speaker-img.png'
    },
    {
      title: 'Competitive interest rates',
      description: 'Our interest rates are hard to beat. With us you get more for less.',
      imgSrc: 'assets/images/speaker-img.png'
    },
    {
      title: 'Technology driven',
      description: 'We have enhanced the loan application process by utilizing technology to bring you convenience and speed.',
      imgSrc: 'assets/images/speaker-img.png'
    },
    {
      title: 'Convinient & flexible',
      description: 'With us you get access to the funds you need through our hassle-free and efficient processes',
      imgSrc: 'assets/images/speaker-img.png'
    },
  ]
} 
