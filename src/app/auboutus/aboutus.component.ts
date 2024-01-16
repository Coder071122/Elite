import { Component, OnInit } from '@angular/core';
import { Tooltip, Tab, Ripple, Carousel, initTE } from 'tw-elements';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    initTE({ Tooltip, Tab, Ripple, Carousel });
  }

}
