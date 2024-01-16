import { Component, OnInit } from '@angular/core';
import {
  Dropdown,
  Ripple,
  initTE,
} from "tw-elements";
@Component({
  selector: 'app-ourshop',
  templateUrl: './ourshop.component.html',
  styleUrls: ['./ourshop.component.css']
})
export class OurshopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    initTE({ Dropdown, Ripple });
  }

}
