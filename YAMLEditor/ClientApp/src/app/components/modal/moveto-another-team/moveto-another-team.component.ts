import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DataTransformService } from 'src/app/services/data-transform.service';
import { UtilsService } from 'src/app/services/utils.service';
import { TreeStateData } from 'src/app/store/reducer/tree.reducer';
import { ConfirmationComponent } from '../confirmation/confirmation.component';

@Component({
  selector: 'app-moveto-another-team',
  templateUrl: './moveto-another-team.component.html',
  styleUrls: ['./moveto-another-team.component.scss']
})
export class MovetoAnotherTeamComponent implements OnInit {

  tree$: Observable<TreeStateData> =  this.store.select<TreeStateData>((state: any) => state.tree.data);
  treeData?: TreeStateData;
  streams: string[] = [];
  groups: string[] = [];
  teams: string[] = [];

  initailData = {
    stream: '',
    group: '',
    team: ''
  };
  newData = {
    stream: '',
    group: '',
    team: ''
  };

  disabled = true;

  constructor(private store: Store, private utilsSvc: UtilsService, private dialog: MatDialog,  public dialogRef: MatDialogRef<MovetoAnotherTeamComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private dataTransformSvc: DataTransformService) { }

  ngOnInit(): void {
    this.tree$.subscribe( x => {
      this.treeData = x;
      const result = this.dataTransformSvc.getInitialSelectsData(x);
      if (result) {
        this.streams = result.streams;
        this.groups = result.groups;
        this.teams = result.teams;

        this.initailData.stream = result.stream;
        this.initailData.group = result.group;
        this.initailData.team = result.team;
      }
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  setSelects(d: any) {
    this.groups = d.groups;
    this.teams = d.teams;
    this.streams = d.streams;

    this.disabled = false;
  }
  newStream(v: any) {
    this.newData.stream = v;
  }
  newGroup(v: any) {
    this.newData.group = v;
  }
  newTeam(v: any) {
    this.newData.team = v;
  }

  openMoveConfirmDialog() {
    this.onClose();

    const dialogRef = this.dialog.open(ConfirmationComponent, {
      data: {type: 'move', name: this.data.name, data: {oldPos: this.initailData, newPos: this.newData}},
      width: '350px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
