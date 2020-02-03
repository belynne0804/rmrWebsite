import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {


  slides = [
    {
      url: 'src/assets/mountainBackgrounds/bg1.jpg'
    },
    {
      url: 'src/assets/mountainBackgrounds/bg2.jpg'
    },
    {
      url: 'src/assets/mountainBackgrounds/bg3.jpg'
    }
  ]

  constructor() { 
  }

  ngOnInit() {

    function setRandomBackground(slides){
      window.setTimeout( "setbackground()", 10000);
      var randomBackground = slides[Math.floor(Math.random() * slides.length)];
      return randomBackground;
    }

    setInterval(setRandomBackground, 5 * 1000);
  }

}
