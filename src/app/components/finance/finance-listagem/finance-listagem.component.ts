import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Finance } from '../finance.model';
import { FinanceListagemDataSource} from './finance-listagem-datasource';

@Component({
  selector: 'app-finance-listagem',
  templateUrl: './finance-listagem.component.html',
  styleUrls: ['./finance-listagem.component.css']
})
export class FinanceListagemComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Finance>;
  dataSource: FinanceListagemDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['data', 'produto','status','valor','quantidade','total'];

  constructor() {
    this.dataSource = new FinanceListagemDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
