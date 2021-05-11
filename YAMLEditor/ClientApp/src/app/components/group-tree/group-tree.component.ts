import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IData } from 'src/app/models/Data';
import { DataService } from 'src/app/services/data.service';
import { UtilsService } from 'src/app/services/utils.service';
import { FETCH_DATA_EFFECT_TYPE } from 'src/app/store/actions/data.action';
import { tableTeamDataAction, tableTeamSearchedDataAction } from 'src/app/store/actions/table.action';
import { treeNodeClickAction } from 'src/app/store/actions/tree.action';

export interface GroupNode {
  name: string;
  level?: number;
  pos?: number[];
  children?: GroupNode[];
  details?: any;
}

/** Flat node with expandable and level information */
export interface GroupFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  pos: number[];
  details: any;
}

@Component({
  selector: 'app-group-tree',
  templateUrl: './group-tree.component.html',
  styleUrls: ['./group-tree.component.scss']
})
export class GroupTreeComponent implements OnInit {

  constructor(private store: Store<any>, private utilsSvc: UtilsService) {
    this.dataSource.data = this.data;
  }

  @Output() itemClick = new EventEmitter();
  yamlContent$: Observable<any> = this.store.select((state: any) => state.data.content);
  theme$ = this.store.select('theme');
  // data$ = this.store.select('data');
  // teamData: any;
  yamlContent?: IData;

  data: GroupNode[] = [
    {
      name: 'Fruit',
    },
    {
      name: 'Vegetables'
    },
    {
      name: 'Fruit'
    },
    {
      name: 'Vegetables'
    },
    {
      name: 'Fruit'
    },
    {
      name: 'Vegetables'
    },
    {
      name: 'Fruit'
    },
    {
      name: 'Vegetables'
    }
  ];

  private _transformer = (node: GroupNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level,
      pos: node.pos!,
      details: node.details
    };
  }

  treeControl = new FlatTreeControl<GroupFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);



  ngOnInit(): void {
    this.yamlContent$.subscribe( (d: IData) => {
      this.yamlContent = d;

      if (d) {
        this.data = d['value-streams'].map((x, id) => ({
          name: x.name,
          // level: 1,
          pos: [id],
          details: x,
          children: x.groups.map( (group, id2) => ({
            name: group.name,
            // level: 2,
            pos: [id, id2],
            details: group,
            children: group.teams.map( (team, id3) => {
              return {
                name: team.name,
                // level: 3,
                pos: [id, id2, id3],
                details: team
            }; })
          }))
        }));


        this.dataSource.data = this.data;

        this.store.dispatch(treeNodeClickAction({payload: {layers: this.data, node: null }}));
      }


    });

  }




  hasChild = (_: number, node: GroupFlatNode) => node.expandable;


  nodeClick(node: GroupNode): void {
    this.store.dispatch(treeNodeClickAction({payload: {layers: this.data, node }}));

    if (node.level !== 2) {
      this.store.dispatch(tableTeamDataAction({payload: null}));
      this.store.dispatch(tableTeamSearchedDataAction({payload: null}));
    } else {
      const teamData = node.details.members.map((member: string) => this.utilsSvc.getMemberInfoFromGitlab(member, this.yamlContent!));
      this.store.dispatch(tableTeamDataAction({payload: teamData}));
      this.store.dispatch(tableTeamSearchedDataAction({payload: teamData}));
    }

    this.itemClick.emit(node);
  }

}
