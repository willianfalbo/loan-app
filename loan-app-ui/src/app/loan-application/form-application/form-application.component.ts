import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'app-form-application',
  templateUrl: './form-application.component.html',
  styleUrls: ['./form-application.component.css'],
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
export class FormApplicationComponent implements OnInit {

  componentState = 'ready';

  redColor = '#e06b70';
  yellowColor = '#fdeca6';
  orangeColor = '#f3ad7d';

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
        if (value > 5000 && value < 8000) {
          return this.yellowColor;
        }
        if (value >= 8000) {
          return this.orangeColor;
        }
      },
      translate: (value: number, label: LabelType): string => {
        switch (label) {
          case LabelType.Low: {
            let description = `R$ ${value.toLocaleString('pt-BR')}`;
            if (value < 1000) {
              description = `${description} <b>(Valor Mínimo R$ 1.000)</b>`;
            }
            // if (value >= 1000 && value <= 5000) {
            //   description = `${description} <b>(Análise Rápida)</b>`;
            // }
            if (value > 5000 && value < 8000) {
              description = `${description} <b>(Análise Moderada)</b>`;
            }
            if (value >= 8000) {
              description = `${description} <b>(Análise Criteriosa)</b>`;
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
        if (value > 24 && value <= 36) {
          return this.yellowColor;
        }
        if (value > 36) {
          return this.orangeColor;
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
            // if (value >= 6 && value <= 24) {
            //   return `${description} <b>(Grandes Chances)</b>`;
            // }
            if (value > 24 && value <= 36) {
              return `${description} <b>(Chance Moderada)</b>`;
            }
            if (value > 36) {
              return `${description} <b>(Menor Chance)</b>`;
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
