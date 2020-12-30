import { FlowerService } from './../../services/flower.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searched-flower',
  templateUrl: './searched-flower.component.html',
  styleUrls: ['./searched-flower.component.css'],
})
export class SearchedFlowerComponent implements OnInit {
  flowerResults: any;
  constructor(public fs: FlowerService) {
    this.flowerResults = [];
  }

  searchFlower = () => {
    this.fs.searchFlowers().subscribe((data) => {
      // console.log(data['hits'][0]['previewURL']);
      data['hits'].forEach((hit) => {
        this.flowerResults.push(hit['previewURL']);
      });
      console.log(this.flowerResults);
    });
  };

  ngOnInit(): void {}
}
