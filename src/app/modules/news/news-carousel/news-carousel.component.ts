import { Component, OnInit } from '@angular/core';
// import { SlideComponent } from './typescripts/free/carousel/slide.component';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-news-carousel',
  templateUrl: './news-carousel.component.html',
  styleUrls: ['./news-carousel.component.scss']
})
export class NewsCarouselComponent implements OnInit {

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

constructor() {

}
ngOnInit() {

}

}




