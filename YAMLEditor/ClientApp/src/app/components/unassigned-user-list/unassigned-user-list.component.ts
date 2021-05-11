import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-unassigned-user-list',
  templateUrl: './unassigned-user-list.component.html',
  styleUrls: ['./unassigned-user-list.component.scss']
})
export class UnassignedUserListComponent implements OnInit {

  tableData$ = this.store.select((state: any) => state.table.unassignedUsersSearchedData);

  tableData: any;
  columns: any;

  rowActions = [
    'edit',
    'delete',
    'assignTeam'
  ];


  constructor(private store: Store) { }

  ngOnInit(): void {
    this.tableData$.subscribe(x => {

      if (x) {
        this.columns = ['username', 'name', 'totalProjects', 'skill'];
        this.tableData = x;
      }

    });
  }
}
