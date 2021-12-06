import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/core/services/article.service';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  url;
  article: any;
  isReady = false;
  constructor(
    private service: ArticleService,
    private router: Router,
    private utils: UtilsService
  ) {
    this.url = localStorage.getItem('currentUrl');
  }

  ngOnInit(): void {
    this.getDetail();
  }

  getDetail() {
    const result = this.service.getArticleByUrl(this.url);
    result.subscribe((result) => {
      if (result.data) {
        this.article = result.data.article;
          console.log(result.data);
      }
      this.isReady = true;
    }, (error) => {
      console.log(error);
    });
  }

}
