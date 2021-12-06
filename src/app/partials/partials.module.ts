import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    TopToolbarComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    TopToolbarComponent,
    SpinnerComponent
  ]
})
export class PartialsModule { }
