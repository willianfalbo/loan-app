import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('componentEffect', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('400ms 0s ease-in-out')
      ])
    ])
  ]
})
export class ContactComponent implements OnInit {

  componentState = 'ready';

  constructor() { }

  ngOnInit() {
  }

}
