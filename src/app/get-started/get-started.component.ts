import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css'],
  animations: [
    trigger('componentEffect', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(30px, 10px)' }),
        animate('300ms 0s ease-in-out')
      ])
    ])
  ]
})
export class GetStartedComponent implements OnInit {

  componentState = 'ready';

  constructor() { }

  ngOnInit() {
  }

}
