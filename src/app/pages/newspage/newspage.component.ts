import { Component, OnInit } from '@angular/core';

import { NewsService } from 'app/modules/news/news.service';

@Component({
  selector: 'app-newspage',
  templateUrl: './newspage.component.html',
  styleUrls: ['./newspage.component.scss']
})
export class NewspageComponent implements OnInit {

  public news;

  public myInterval: Number = 3000;
  public activeSlideIndex: Number = 0;
  public noWrapSlides: Boolean = false;

  public slides: Array<Object> = [
      {'image': 'https://mdbootstrap.com/img/Photos/Slides/img%20(18).jpg'},
      {'image': 'https://mdbootstrap.com/img/Photos/Slides/img%20(19).jpg'},
      {'image': 'https://mdbootstrap.com/img/Photos/Slides/img%20(20).jpg'},
      {'image': 'https://mdbootstrap.com/img/Photos/Slides/img%20(20).jpg'},
  ];

  activeSlideChange() {
    // console.log(this.activeSlideIndex);
  }

  constructor(newsService: NewsService

  ) {
    this.news = newsService.getNews().map(e => {
      return e;
    })
  }
  ngOnInit() {

  }

}
