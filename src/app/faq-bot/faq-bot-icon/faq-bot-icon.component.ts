import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-faq-bot-icon',
  templateUrl: './faq-bot-icon.component.html',
  styleUrls: ['./faq-bot-icon.component.css'],
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
export class FaqBotIconComponent implements OnInit {

  componentState = 'ready';
  @Output() faqBotIconClickedEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitFaqBotIconEvent() {
    this.faqBotIconClickedEvent.emit(true);
  }

}
