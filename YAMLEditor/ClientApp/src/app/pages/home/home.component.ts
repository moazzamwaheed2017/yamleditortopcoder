import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FETCH_DATA_EFFECT_TYPE } from 'src/app/store/actions/data.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch({type: FETCH_DATA_EFFECT_TYPE});
  }

}
