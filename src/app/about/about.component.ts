import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  axel: string;
  

  constructor() {
    this.axel = 'assets/IMG_1224.jpg';
  

  }

  ngOnInit() {
  }
}
