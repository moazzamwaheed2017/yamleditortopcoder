import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IData } from 'src/app/models/Data';
import { UtilsService } from 'src/app/services/utils.service';
import { FETCH_DATA_EFFECT_TYPE } from 'src/app/store/actions/data.action';
import { tableTeamDataAction, tableTeamSearchedDataAction, tableUnassignedUsersDataAction, tableUnassignedUsersSearchedDataAction } from 'src/app/store/actions/table.action';
import * as _ from 'lodash';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  data$ = this.store.select('data');
  tableData$ = this.store.select('table');
  tableData?: any[];
  searchCandidates: string[] = [];

  mode: 'unassigned' | 'managers' | 'team' = 'unassigned';

  constructor(private store: Store<{data: any, table: any}>,  private utilsSvc: UtilsService) { }

  searchImpl(v: string) {
    const result = this.utilsSvc.searchFilter('object', this.tableData, v);

    setTimeout(() => {
      if (this.mode === 'unassigned'){
        this.store.dispatch(tableUnassignedUsersSearchedDataAction({payload: result}));
      } else if (this.mode === 'team'){
        this.store.dispatch(tableTeamSearchedDataAction({payload: result}));
      } else if (this.mode === 'managers'){

      }
    }, 0);


  }

  ngOnInit(): void {
    // this.store.dispatch({type: FETCH_DATA_EFFECT_TYPE})
    this.data$.subscribe( data => {
      if (data.content) {
        const content: IData = data.content;
        const membersData = content.gitlab.members;
        this.store.dispatch(tableUnassignedUsersDataAction({payload: membersData}));
        this.store.dispatch(tableUnassignedUsersSearchedDataAction({payload: membersData}));
      }
    });
    this.tableData$.subscribe(td => {
      this.searchCandidates = [];

      if (this.mode === 'unassigned'){
        this.tableData = td.unassignedUsersData;
      }else if (this.mode === 'team'){
        this.tableData = td.teamData;
      } else if (this.mode === 'managers'){

      }

      if (this.tableData) {
        this.tableData.forEach((x: any) => _.values(x).forEach(v => this.searchCandidates.push(v))  );
      }
    });
  }


}
