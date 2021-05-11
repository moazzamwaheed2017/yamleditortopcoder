import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataTransformService } from 'src/app/services/data-transform.service';
import { UtilsService } from 'src/app/services/utils.service';
import { TreeStateData } from 'src/app/store/reducer/tree.reducer';

@Component({
  selector: 'app-sh-select-groups',
  templateUrl: './sh-select-groups.component.html',
  styleUrls: ['./sh-select-groups.component.scss']
})
export class ShSelectGroupsComponent implements OnInit {

  @Input() set data(x: TreeStateData) {
    if (x) {
      this.treeData = x;
      const pos = x.node ? x.node.pos : [0, 0, 0];
      this.selectedPos.stream = pos[0];
      this.selectedPos.group = pos[1];

      const result = this.dataTransformSvc.getInitialSelectsData(x);
      if (result) {
        this.streams = result.streams;
        this.groups = result.groups;
        this.teams = result.teams;
      }
    }
  }
  @Output() selectsChange = new EventEmitter();

  treeData?: TreeStateData;
  streams: string[] = [];
  groups: string[] = [];
  teams: string[] = [];
  selectedPos: any = {
    stream: null,
    group: null,
  };

  constructor(private utilsSvc: UtilsService, private dataTransformSvc: DataTransformService) { }

  ngOnInit(): void {
  }

  streamChange(stream: string) {
    const pos: number = this.treeData!.layers.findIndex( x => x.name === stream);
    this.selectedPos.stream = pos;
    this.groups = this.treeData!.layers[pos].children.map((sx: any) => sx.name);
    this.teams = [];

    this.emitChange();
  }

  groupChange(group: string) {
    const pos: number = this.treeData!.layers[this.selectedPos.stream].children.findIndex( (x: any) => x.name === group);
    this.selectedPos.group = pos;
    this.teams = this.treeData!.layers[this.selectedPos.stream].children[pos].children.map((sx: any) => sx.name);

    this.emitChange();
  }

  emitChange() {
    this.selectsChange.emit({
      streams: this.streams,
      groups: this.groups,
      teams: this.teams
    });
  }


}
