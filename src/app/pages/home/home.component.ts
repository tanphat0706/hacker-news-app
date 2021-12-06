
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Article } from 'src/app/core/models/article.model';
import { ArticleService } from 'src/app/core/services/article.service';
import { UtilsService } from 'src/app/core/services/utils.service';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles: Article[] = [];
  subcription: any;
  isReady = false;
  pageIndex = 0;
  constructor(
    public dialog: MatDialog,
    private service: ArticleService,
    private utils: UtilsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getListArticle();

    const target = document.querySelector('.tw')
    const writer = new Typewriter(target, {
      loop: true, 
      typeSpeed: 60,
      typeColor: 'white' 
    })
    writer
    .type('Hello world! I\'m Phat Le')
    .rest(500)
    .changeOps({ deleteSpeed: 10 })
    .clear()
    .type('The Hacker News is showing.\nApplication was build by Angular 12.')
    .rest(500)
    .changeOps({ deleteSpeed: 10 })
    .clear()
    .start()
  }

  getListArticle () {
    this.isReady = false;
    const pageNumber = this.pageIndex + 1;
    const result = this.service.getArticleList(pageNumber);
    this.subcription = result.subscribe((result) => {
      if (result.data) {
        this.articles = result.data.articles.map((art: any) => {
          return {...art, description: this.utils.stringReplaceWithInput(art.description, ' | ', '<br>'), image: this.handleData(art)}
        });
        window.scrollTo(0, 0);
        this.isReady = true;
      }
    });
  }

  viewDetail(url: any) {
    localStorage.setItem('currentUrl', url);
    this.router.navigate(['news-detail']);
  }

  handleData(data: any) {
    const result = this.service.getArticleByUrl(data.url);
    result.subscribe((result) => {
      if (result.data) {
        return result.data.article.coverImageUrl;
      }
    });
  }
  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }

  increase() {
    if (this.pageIndex >= 0) {
      this.pageIndex += 1;
      this.getListArticle();
    }
  }
  decrease() {
    if (this.pageIndex > 0) {
      this.pageIndex -= 1;
      this.getListArticle();
    }
  }
}
