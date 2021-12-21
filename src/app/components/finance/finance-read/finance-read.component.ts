import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance-read',
  templateUrl: './finance-read.component.html',
  styleUrls: ['./finance-read.component.css']
})
export class FinanceReadComponent implements OnInit {

  dados = [{
    titulo: "Chocolate",
    status: "Investimento",
    data: new Date(),
    quantidade: 10,
    valor_unitario: 20.30,
    user: "23d896hgd89000300"
  },
  {
    titulo: "Bolo pote",
    status: "Lucro",
    data: new Date(),
    quantidade: 10,
    valor_unitario: 12.00,
    user: "23d896hgd89000300"
  },
  {
    titulo: "Leite moca",
    status: "Investimento",
    data: new Date(),
    quantidade: 10,
    valor_unitario: 20.30,
    user: "23d896hgd89000300"
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
