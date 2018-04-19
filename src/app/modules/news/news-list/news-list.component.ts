import { Component, OnInit } from '@angular/core';
import { NewsService } from 'app/modules/news/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

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

public newArr;
 breakIntoThrees (xos) {
   this.newArr = [];
      // tslint:disable-next-line:no-console
      // console.log(xos, xos.length, xos.slice(0, 3));
      this.ar (xos);
      return this.newArr;
  }
  ar (xos) {
    if (xos.length ) {

      // tslint:disable-next-line:no-console
      console.log('initial:', xos);
      const a = xos.slice(0, 3);
      this.newArr.push(a);
      xos = xos.splice(3, 3);
      // tslint:disable-next-line:no-console
      console.log(xos);
      // tslint:disable-next-line:no-console
      console.log(a);
      // tslint:disable-next-line:no-console
      console.log(this.newArr);
       this.ar (xos);
    }
  }



  activeSlideChange() {
    // console.log(this.activeSlideIndex);
  }

  constructor(newsService: NewsService) {
    this.news = newsService.getNews().map(e => {
      return e;
    })
  }

  ngOnInit() {
    this.breakIntoThrees(this.news);
  }

}
