import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  screenHeight: number;
  screenWidth: number;
  title = 'neweShop';
  constructor() {
    this.getScreenSize();
  }
    @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
          this.screenHeight = window.innerHeight;
          this.screenWidth = window.innerWidth;
          console.log(this.screenHeight, this.screenWidth);
    }
    ngOnInit() {}
    
}

