import { Component, OnInit } from '@angular/core';

let apiLoaded = false;

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {


  constructor() {

  }
  cimg1: any = 'https://i.ibb.co/xXXWh39/Whats-App-Image-2021-06-28-at-9-01-55-AM.jpg';
  cimg2: any = 'https://i.ibb.co/j4S0V0D/Whats-App-Image-2021-06-28-at-9-01-55-AM-1.jpg';

  ngOnInit() {

  }


}
