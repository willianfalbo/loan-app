import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {

  loans: any[];

  constructor() { }

  ngOnInit() {
    this.loans = [
      {
        id: 'capital-giro',
        name: 'Capital de Giro',
        description: 'Detalhes capital de giro',
        imageUrl: '../../assets/img/loan/capital-giro.png',
      },
      {
        id: 'emprestimo-pessoal',
        name: 'Emprestimo Pessoal',
        description: 'Detalhes emprestimo pessoal',
        imageUrl: '../../assets/img/loan/emprestimo-pessoal.png',
      },
      {
        id: 'financiamento-casa',
        name: 'Financiamento Casa',
        description: 'Detalhes financiamento casa',
        imageUrl: '../../assets/img/loan/finaciamento-casa.png',
      },
      {
        id: 'financiamento-divida',
        name: 'Financiamento Dívida',
        description: 'Detalhes financiamento de dívida',
        imageUrl: '../../assets/img/loan/finaciamento-divida.png',
      },
      {
        id: 'financiamento-carro',
        name: 'Financiamento Carro',
        description: 'Detalhes financiamento de carro',
        imageUrl: '../../assets/img/loan/financiamento-carro.png',
      },
      {
        id: 'investimento-negocio',
        name: 'Investimento Negócio',
        description: 'Detalhes investimento negócio',
        imageUrl: '../../assets/img/loan/investimento-negocio.png',
      },
    ];
  }

}
