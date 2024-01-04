import { Component, OnInit } from '@angular/core';
import { Tooltip, Tab, Ripple, Carousel, initTE } from 'tw-elements';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    initTE({ Tooltip, Tab, Ripple, Carousel });
  }
}
