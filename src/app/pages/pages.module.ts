import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { PartialsModule } from '../partials/partials.module';
import { HomeComponent } from './home/home.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { NewsComponent } from './news/news.component';


@NgModule({
  declarations: [
    PagesComponent, HomeComponent, NewsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PartialsModule,
    NgbModalModule,
    FlexLayoutModule,
    MaterialModule
  ],
})
export class PagesModule { }
