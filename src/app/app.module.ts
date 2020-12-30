import { FlowerService } from './services/flower.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SearchedTermsComponent } from './components/searched-terms/searched-terms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchedFlowerComponent } from './components/searched-flower/searched-flower.component';

@NgModule({
  declarations: [AppComponent, HomepageComponent, SearchedTermsComponent, SearchedFlowerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [FlowerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
