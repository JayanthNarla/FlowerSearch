import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlowerService {
  readonly API_KEY = '19709906-1fd21f388a5218e3a27283fa9';
  readonly URL = 'https://pixabay.com/api/?';
  flName: string;
  searchedTerms: any;

  constructor(private http: HttpClient) {
    this.searchedTerms = [];
  }

  searchFlowers = () => {
    this.searchedTerms.push(this.flName);
    return this.http.get(
      `${this.URL}key=${this.API_KEY}&q=${this.flName}&image_type=photo`
    );
  };
}
