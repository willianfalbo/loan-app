import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-faq-bot',
  templateUrl: './faq-bot.component.html',
  styleUrls: ['./faq-bot.component.css'],
  animations: [
    trigger('componentEffect', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('400ms 0s ease-in-out')
      ])
    ])
  ]
})
export class FaqBotComponent implements OnInit {

  componentState = 'ready';
  @Output() faqBotCloseEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitFaqBotEvent() {
    this.faqBotCloseEvent.emit(true);
  }

}
