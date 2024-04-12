import { Component } from '@angular/core';

interface News {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent {
  templateType: string = 'news';
  newsLists: News[] = [
    {
      title: 'A digital prescription for the pharma industry',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo sodales elit......',
      image: 'assets/images/finance-news.jpg'
    },
    {
      title: 'A digital prescription for the pharma industry',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo sodales elit......',
      image: 'assets/images/finance-news.jpg'
    },
    {
      title: 'A digital prescription for the pharma industry',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo sodales elit......',
      image: 'assets/images/finance-news.jpg'
    },
  ]
}
