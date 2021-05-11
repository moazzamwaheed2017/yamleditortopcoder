import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  tableData$ = this.store.select((state: any) => state.table.teamSearchedData);

  tableData: any;
  columns: any;

  rowActions = [
    'edit',
    'delete',
    'moveto'
  ];


  constructor(private store: Store) { }

  ngOnInit(): void {
    this.tableData$.subscribe(x => {

      if (x) {
        this.columns = ['username', 'name', 'email', 'employer'];
        this.tableData = x;
      } else {
        this.tableData = null;
        this.columns = null;
      }

    });
  }

}
