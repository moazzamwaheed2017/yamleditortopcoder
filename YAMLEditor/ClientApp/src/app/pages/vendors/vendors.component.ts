import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IData } from 'src/app/models/Data';
import { FETCH_DATA_EFFECT_TYPE } from 'src/app/store/actions/data.action';
import { tableVendorDataAction, tableVendorSearchedDataAction } from 'src/app/store/actions/table.action';
import * as _ from 'lodash';
import { UtilsService } from 'src/app/services/utils.service';
import { MatDialog } from '@angular/material/dialog';
import { EditVendorComponent } from 'src/app/components/modal/edit-vendor/edit-vendor.component';
import { AddVendorComponent } from 'src/app/components/modal/add-vendor/add-vendor.component';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {
  data$ = this.store.select('data');
  tableData: any;
  searchCandidates: string[] = [];

  constructor(private store: Store<{data: {content: IData}}>, private utilsSvc: UtilsService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.data$.subscribe( data => {
      if (data.content) {
        const content: IData = data.content;
        const vendors = content.vendors;
        this.tableData = vendors;
        if (vendors) {
          vendors.forEach((x: any) => _.values(x).forEach(v => this.searchCandidates.push(v))  );
        }
        this.store.dispatch(tableVendorDataAction({payload: vendors}));
      }
    });
  }

  searchImpl(v: string) {
    const result = this.utilsSvc.searchFilter('object', this.tableData, v);
    this.store.dispatch(tableVendorSearchedDataAction({payload: result}));
  }

  newVendor() {
    this.openAddVendorDialog();
  }

  openAddVendorDialog() {
    const dialogRef = this.dialog.open(AddVendorComponent, {
      data: null,
      width: '350px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }


}
