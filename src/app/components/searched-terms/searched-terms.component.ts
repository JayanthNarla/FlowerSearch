import { FlowerService } from './../../services/flower.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searched-terms',
  templateUrl: './searched-terms.component.html',
  styleUrls: ['./searched-terms.component.css'],
})
export class SearchedTermsComponent implements OnInit {
  constructor(public fs: FlowerService) {}

  ngOnInit(): void {}
}
