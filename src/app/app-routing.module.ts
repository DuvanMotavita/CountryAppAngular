import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/Pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/Pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/Pages/contact-page/contact-page.component';
import { CountriesModule } from './countries/countries.module';

const routes: Routes = [
  // {
  //     path: '',
  //     component: HomePageComponent
  // },
  {
      path: 'about',
      component: AboutPageComponent
  },
  {
      path: 'contact',
      component: ContactPageComponent
  },
  {
      path: 'countries',
      loadChildren: ()=>import('./countries/countries.module').then(m=>m.CountriesModule),
  },
  {
      path: 'about',
      component: AboutPageComponent
  },
  {
      path: '**',
      redirectTo: 'countries'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
