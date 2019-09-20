import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {

  showFaqBotWindow = false;

  constructor() { }

  ngOnInit() {
  }

  faqBotIconClickedEvent(clicked: boolean) {
    this.showFaqBotWindow = true;
  }

  faqBotCloseEvent(clicked: boolean) {
    this.showFaqBotWindow = false;
  }

}
