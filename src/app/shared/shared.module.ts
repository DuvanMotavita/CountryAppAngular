import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { LoadingSpinnerComponent } from './Components/loading-spinner/loading-spinner.component';
import { SearchBoxComponent } from './Components/search-box/search-box.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';




@NgModule({
  declarations: [
     AboutPageComponent,
     ContactPageComponent,
     HomePageComponent,
     LoadingSpinnerComponent,
     SearchBoxComponent,
     SidebarComponent,
    ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    LoadingSpinnerComponent,
    SearchBoxComponent,
    SidebarComponent,
  ]
})
export class SharedModule { }
