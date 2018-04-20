import { Component, OnInit } from '@angular/core';
import { NewsService } from 'app/modules/news/news.service';
// import { SlideComponent } from './typescripts/free/carousel/slide.component';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-news-carousel',
  templateUrl: './news-carousel.component.html',
  styleUrls: ['./news-carousel.component.scss']
})
export class NewsCarouselComponent implements OnInit {
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

// mockdata
// public news: Array<object> =  [
//   {
//       'id': '01',
//       'title': 'hue',
//       'createdBy': 'primary',
//       'content': '.mlknbjvhcgfxdzxfcgvhbjnkml'
//   },
//   {
//       'id': '02',
//       'title': 'hora',
//       'createdBy': 'primary',
//       'content': '.mlknbjvhcgfxdzxfcgvhbjnkml'
//   },
//   {
//       'id': '03',
//       'title': 'dosis',
//       'createdBy': 'primary',
//       'content': '.mlknbjvhcgfxdzxfcgvhbjnkml'
//   },
//   {
//       'id': '04',
//       'title': 'rona',
//       'createdBy': 'primary',
//       'content': '.mlknbjvhcgfxdzxfcgvhbjnkml'
//   },
//   {
//       'id': '05',
//       'title': 'serd',
//       'createdBy': 'primary',
//       'content': '.mlknbjvhcgfxdzxfcgvhbjnkml'
//   },
//   {
//       'id': '06',
//       'title': 'akdj',
//       'createdBy': 'primary',
//       'content': '.mlknbjvhcgfxdzxfcgvhbjnkml'
//   }
//   ]
public newArr;
 breakIntoThrees (xos) {
   this.newArr = [];
      // tslint:disable-next-line:no-console
      // console.log(xos, xos.length, xos.slice(0, 3));
      this.ar (xos);

      // for (let i in xos) {
      //   if (xos) {
      //     let b = xos.slice(0, 3)
      //   // this.newArr.push(

      //   // )
      //     // tslint:disable-next-line:no-console


      //     // console.log(this.newArr, i);
      //     console.log(xos, xos.length, xos.slice(0, 3), xos.splice(0, 3) b);

      //   }
      // }
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
    // this.newArr.map(e => {
    //   return e
    // }


  }

  infiniteLoop(arr, num) {
    // tslint:disable-next-line:prefer-const
    let answer = [];
    let count = 0;
    for (let i = 0; i < num.length; i++) {
      answer[i] = [];    // <--- add this
      for (let j = 0; j < num[i]; j++, count++) {
        answer[i][j] = arr[count];
      }

    }
    // tslint:disable-next-line:no-console
    console.log(answer ) ;
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
  this.infiniteLoop(this.news, 3);
}


compare(i){
     if (i === 1){
         return true;
     }
     return false;
}

}




