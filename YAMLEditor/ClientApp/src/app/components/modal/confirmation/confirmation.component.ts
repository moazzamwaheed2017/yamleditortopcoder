import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TreeStateData } from 'src/app/store/reducer/tree.reducer';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  tree$: Observable<TreeStateData> =  this.store.select<TreeStateData>((state: any) => state.tree.data);

  constructor(private store: Store, public dialogRef: MatDialogRef<ConfirmationComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.tree$.subscribe( x => {
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
