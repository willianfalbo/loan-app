import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-loan-card',
  templateUrl: './loan-card.component.html',
  styleUrls: ['./loan-card.component.css'],
  animations: [
    trigger('componentEffect', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(-30px, -10px)' }),
        animate('400ms 0s ease-in-out')
      ])
    ])
  ]
})
export class LoanCardComponent implements OnInit {

  @Input() loanItem: any;
  componentState = 'ready';

  constructor() { }

  ngOnInit() {
  }

}
