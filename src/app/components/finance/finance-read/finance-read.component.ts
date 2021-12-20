import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance-read',
  templateUrl: './finance-read.component.html',
  styleUrls: ['./finance-read.component.css']
})
export class FinanceReadComponent implements OnInit {

  longText = `fermento em po`;

  constructor() { }

  ngOnInit(): void {
  }

}
