import { Component, OnInit, HostListener  } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isTablet : boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(window.innerWidth <= 1010 && window.innerWidth >= 700) {
      this.isTablet = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    if(window.innerWidth <= 1010 && window.innerWidth >= 700) {
      console.log("ok")
      this.isTablet = true;
    } else {

      this.isTablet = false;
    }
  }

}
