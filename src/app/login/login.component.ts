import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('componentEffect', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(0px, 0px)' }),
        animate('700ms 0s ease-in-out')
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {

  componentState = 'ready';

  constructor() { }

  ngOnInit() {
  }

}
