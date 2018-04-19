import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { NewsService } from 'app/modules/news/news.service';
@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  public news$;
  public newsSingleArray$;
  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    // private router: Router
  ) { }

  ngOnInit() {
    // console.log(this.newsService.getOneNews(1));

    // this.news$ = this.route.paramMap.switchMap((params: ParamMap) => this.newsService.getOneNews(params.get('id')).map(e => {
    //   return e;
    // });

    
    this.newsSingleArray$ = this.newsService.getOneNews(this.route.snapshot.params['id']);
    // const obj = this.news$.reduce((o, key) => Object.assign(o, {[key]: 'data'}), {});
    this.news$ = this.newsSingleArray$[0];

  }

}
