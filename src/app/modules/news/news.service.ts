import { Injectable } from '@angular/core';

// import { News } from './news';
import { NEWS } from './mock-news';

@Injectable()
export class NewsService {

  constructor() { }

  getNews() {
    // tslint:disable-next-line:no-console
    // console.log(NEWS)
    return NEWS;

  };

  getOneNews(id) {
    const user_id = id;
    const d = NEWS.filter(e => e.id == user_id).map(e => {
      return e;
    });
    console.log('ad', user_id);

    // tslint:disable-next-line:no-console
    console.log('sd', d)
    return d;

  };


}


