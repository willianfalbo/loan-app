import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.css'],
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
// implemented based on ng5-slider
// https://angular-slider.github.io/ng5-slider/demos
export class SimulationComponent implements OnInit {

  componentState = 'ready';

  redColor = '#e06b70';

  defaultValueLoan = 2000;
  defaultValueInstallments = 12;
  loanOptions: Options = this.getLoanSlider();
  installmentsOptions: Options = this.getInstallmentsSlider();

  constructor() { }

  ngOnInit() {
  }

  getLoanSlider(): Options {
    const options: Options = {
      floor: 0,
      ceil: 10000,
      step: 100,
      showSelectionBar: true,
      getSelectionBarColor: (value: number): string => {
        if (value < 1000) {
          return this.redColor;
        }
      },
      translate: (value: number, label: LabelType): string => {
        switch (label) {
          case LabelType.Low: {
            let description = `R$ ${value.toLocaleString('pt-BR')}`;
            if (value < 1000) {
              description = `${description} <b>(Valor Mínimo R$ 1.000)</b>`;
            }
            return description;
          }
          //   case LabelType.High:
          //     return `R$ ${value.toLocaleString('pt-BR')}`;
          default:
            return `R$ ${value.toLocaleString('pt-BR')}`;
        }
      }
    };
    return options;
  }

  getInstallmentsSlider(): Options {
    const options: Options = {
      floor: 0,
      ceil: 48,
      step: 1,
      showSelectionBar: true,
      getSelectionBarColor: (value: number): string => {
        if (value < 6) {
          return this.redColor;
        }
      },
      translate: (value: number, label: LabelType): string => {
        switch (label) {
          case LabelType.Low: {
            const description = `${value} meses`;
            if (value <= 1) {
              return `${value} mes <b>(Mínimo 6 meses)</b>`;
            }
            if (value < 6) {
              return `${description} <b>(Mínimo 6 meses)</b>`;
            }
            return description;
          }
          //   case LabelType.High:
          //     return `${value} meses`;
          default:
            return `${value} meses`;
        }
      }
    };
    return options;
  }

}
