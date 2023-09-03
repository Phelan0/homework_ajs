import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { londonComponent } from './employee/london/london.component';
import { romeComponent } from './employee/rome/rome.component';
import { parisComponent } from './employee/paris/paris.component';
import { allemployeeComponent } from './employee/allemployee/allemployee.component';

const appRoutes: Routes = [
  {path: 'london', component: londonComponent},
  {path: 'rome', component: romeComponent},
  {path: 'paris', component: parisComponent},
  {path: 'allemployee', component: allemployeeComponent}
]

@NgModule({
  declarations: [
    AppComponent, londonComponent,
    romeComponent, parisComponent,
    allemployeeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
