import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PartialsModule } from './partials/partials.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GraphQLModule } from './graphql.module';
import { ArticleService } from './core/services/article.service';
import { UtilsService } from './core/services/utils.service';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    PartialsModule,
    NgbModule,
    GraphQLModule,
    MaterialModule
  ],
  providers: [ArticleService, UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
