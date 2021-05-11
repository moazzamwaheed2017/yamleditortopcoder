import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IVendor } from 'src/app/models/IVendor';
import { DataTransformService } from 'src/app/services/data-transform.service';
import { UtilsService } from 'src/app/services/utils.service';
import { TreeStateData } from 'src/app/store/reducer/tree.reducer';

@Component({
  selector: 'app-assign-to-team',
  templateUrl: './assign-to-team.component.html',
  styleUrls: ['./assign-to-team.component.scss'],
})
export class AssignToTeamComponent implements OnInit {
  tree$: Observable<TreeStateData> = this.store.select<TreeStateData>(
    (state: any) => state.tree.data
  );
  tableData$ = this.store.select<IVendor[]>((state: any) => state.table.vendorData);
  treeData?: TreeStateData;
  streams: string[] = [];
  groups: string[] = [];
  teams: string[] = [];
  vendors: any[] = [];

  constructor(
    private store: Store,
    private utilsSvc: UtilsService,
    public dialogRef: MatDialogRef<AssignToTeamComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataTransformSvc: DataTransformService
  ) {}

  ngOnInit(): void {
    this.tree$.subscribe((x) => {
      this.treeData = x;
      const result = this.dataTransformSvc.getInitialSelectsData(x);
      if (result) {
        this.streams = result.streams;
        this.groups = result.groups;
        this.teams = result.teams;
      }
    });

    this.tableData$.subscribe((x: IVendor[]) => {
      if (x) {
        this.vendors = x.map(this.dataTransformSvc.vendorListMap).map( (d: any) => d.name);
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
  }
}
