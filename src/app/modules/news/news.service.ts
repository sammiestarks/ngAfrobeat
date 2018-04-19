import { Injectable } from '@angular/core';

// import { News } from './news';
import { NEWS } from './mock-news';

@Injectable()
export class NewsService {

  constructor() { }

  getNews() {
    // tslint:disable-next-line:no-console
    console.log(NEWS)
    return NEWS;

  };


}


