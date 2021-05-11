import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

export interface EditUserDialogData {
  username: string;
  name: string;
  email: string;
  employer: string;
  avatar: string;
}

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  data$ = this.store.select((s: any) => s.data.content);
  options = [];

  constructor(private store: Store, public dialogRef: MatDialogRef<EditUserComponent>,
              @Inject(MAT_DIALOG_DATA) public data: EditUserDialogData) {
  }

  selectFormControl = new FormControl('', Validators.required);

  ngOnInit(): void {
    this.data$.subscribe(x => {
      this.options = x.vendors.map( (v: any) => v.name);
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
