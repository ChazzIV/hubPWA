import { Component, OnInit, Inject } from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.view.html',
  styleUrls: ['./home.view.scss']
})
export class HomeView implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  abajo(): void {
    this.document.documentElement.scrollBy({
      top: 690,
      left: 690,
      behavior: 'smooth'
    }); 
  }

}
