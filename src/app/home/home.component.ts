import { Component, OnInit } from '@angular/core';
import { Tooltip} from 'tw-elements';


// Initialization for ES Users
import {
  Ripple,
  initTE,
} from "tw-elements";

initTE({ Ripple });
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    initTE({ Tooltip });
  }

}
