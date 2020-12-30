import { SearchedTermsComponent } from './components/searched-terms/searched-terms.component';
import { SearchedFlowerComponent } from './components/searched-flower/searched-flower.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children: [
      { path: '', component: SearchedFlowerComponent },
      { path: 'searchedTerm', component: SearchedTermsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
