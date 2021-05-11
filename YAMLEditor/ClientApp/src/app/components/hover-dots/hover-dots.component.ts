import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { tableRowAction } from 'src/app/store/actions/table.action';
import { AssignToTeamComponent } from '../modal/assign-to-team/assign-to-team.component';
import { ConfirmationComponent } from '../modal/confirmation/confirmation.component';
import { EditUserComponent } from '../modal/edit-user/edit-user.component';
import { EditVendorComponent } from '../modal/edit-vendor/edit-vendor.component';
import { MovetoAnotherTeamComponent } from '../modal/moveto-another-team/moveto-another-team.component';

export type HoverDotsActionType = 'edit'|'delete'|'moveto' | 'assignTeam';

@Component({
  selector: 'app-hover-dots',
  templateUrl: './hover-dots.component.html',
  styleUrls: ['./hover-dots.component.scss']
})
export class HoverDotsComponent implements OnInit {

  @Input() data: any = null;

  @Input() actions: HoverDotsActionType[] = [];

  @Input() actionType = 'team';

  constructor(private store: Store, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onClick(type: HoverDotsActionType): void {
    // this.store.dispatch(tableRowAction({payload: {[`${type}Click`]: true}}))
    if (type === 'edit' && this.actionType !== 'vendor'){
      this.openEditUserDialog();
    }
    if (type === 'edit' && this.actionType === 'vendor'){
      this.openEditVendorDialog();
    }
    if (type === 'delete') {
      this.openDeleteConfirmDialog();
    }
    if (type === 'moveto') {
      this.openMoveTeamDialog();
    }
    if (type === 'assignTeam') {
      this.openAssignTeamDialog();
    }
  }

  openEditVendorDialog(): void {
    const dialogRef = this.dialog.open(EditVendorComponent, {
      data: this.data,
      width: '350px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openEditUserDialog(): void {
    const dialogRef = this.dialog.open(EditUserComponent, {
      data: this.data,
      width: '350px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openDeleteConfirmDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      data: {type: 'delete', name: this.data.name},
      width: '350px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  openMoveTeamDialog(): void {
    const dialogRef = this.dialog.open(MovetoAnotherTeamComponent, {
      data: {name: this.data.name},
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  openAssignTeamDialog(): void {
    const dialogRef = this.dialog.open(AssignToTeamComponent, {
      data: this.data,
      width: '450px',
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
