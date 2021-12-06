import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable , BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ArticleService {
    private urlSource = new BehaviorSubject('');
    currentUrl = this.urlSource.asObservable();
    constructor(private apollo: Apollo) {}

    getArticleList(pageNumber: any): Observable<any> {
        const ArticlesQuery = gql`
        query Articles($pageNumber: Int!) {
            articles(pageNumber: $pageNumber) {
                content
                coverImageUrl
                description
                subtitle
                title
                url
            }
        }
        `;
        return this.apollo.watchQuery({ query: ArticlesQuery, variables: {pageNumber: pageNumber} }).valueChanges;
    }

    getArticleByUrl(url: any): Observable<any> {
        const ArticleQuery = gql`
        query Article($url: String!) {
            article(url: $url) {
                content
                coverImageUrl
                description
                subtitle
                title
                url
            }
        }
        `;
        return this.apollo.watchQuery({ query: ArticleQuery, variables: {url: url} }).valueChanges;
    }

    refreshPage() {
        setTimeout(() => {
        window.location.reload();
        }, 1500);
    }

    passUrl(url: any) {
        this.urlSource.next(url);
    }
}
