import { Component, Input, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import * as _ from 'lodash';

export interface TableElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: TableElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
  @Input() set columns(cols: any) {

    this.tmp.displayedColumns = cols;
    this.makeUp();
  }
  @Input() set data(d: any) {

    this.tmp.data = d;
    this.makeUp();
  }

  @Input() set rowActions(v: string[]) {
    this.tmp.rowActions = v;
    this.makeUp();
  }

  constructor() { }

  @Input() actionType = 'team';

  tmp: any = {};

  displayedColumns: string[] = [];
  dataSource: any;
  _rowActions: string[] = [];
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort!: MatSort;

  makeUp() {
    this.displayedColumns = this.tmp.displayedColumns || [];
    this._rowActions = this.tmp.rowActions || [];
    if (this._rowActions.length) {
      this.displayedColumns = _.cloneDeep(this.displayedColumns);
      this.displayedColumns.push('actions');
      if (this.tmp.data) {
        this.tmp.data = _.cloneDeep(this.tmp.data);
        this.tmp.data.forEach((d: any) => d.actions = this._rowActions);
      }
    }
    this.dataSource = this.tmp.data ? new MatTableDataSource(this.tmp.data) : null;

    this.ngAfterViewInit();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.sort = this.sort;
    }
  }

}
