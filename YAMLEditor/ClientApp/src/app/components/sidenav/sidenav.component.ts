import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { toggleSidenav } from 'src/app/store/actions/sidenav.action';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  open$: Observable<boolean>;

  constructor(private store: Store<{sidenav: any}>) {
    this.open$ = this.store.select('sidenav');
  }

  // @ViewChild("drawer") drawer: MatDrawer | undefined;

  ngOnInit(): void {
  }

  toggle(_drawer: any) {
    // this.drawer?.toggle();
    this.store.dispatch(toggleSidenav());
  }

}
