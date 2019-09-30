import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  formatLabel(value: number) {
    if (value >= 255) {
      return Math.round(value / 255);
    }

    return value;
  }

  constructor() { }

  ngOnInit() {
  }

}
