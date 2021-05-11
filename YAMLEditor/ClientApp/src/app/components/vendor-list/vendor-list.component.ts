import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DataTransformService } from 'src/app/services/data-transform.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit {

  tableData$ = this.store.select((state: any) => state.table.vendorData);

  tableData: any;
  columns: any;

  rowActions = [
    'edit',
    'delete',
  ];

  actionType = 'vendor';


  constructor(private store: Store, private dataTransformSvc: DataTransformService) { }

  ngOnInit(): void {
    this.tableData$.subscribe((x: any) => {


      if (x) {
        x = x.map(this.dataTransformSvc.vendorListMap);
        this.columns = Object.keys(x[0]);
        this.tableData = x;
      }


    });
  }

}
