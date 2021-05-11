import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import {startWith, map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { UtilsService } from 'src/app/services/utils.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  control = new FormControl();
  @Input() candidates: string[] = [];
  @Output() search = new EventEmitter();
  filteredData?: Observable<string[]>;

  theme$ = this.store.select('theme');

  constructor(private utilsSvc: UtilsService, private store: Store<any>) { }

  ngOnInit(): void {
    this.filteredData = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    this.control.valueChanges.subscribe( x => {
      this.search.emit(this.control.value);
    });

  }


  private _filter(value: string): string[] {

    const filtered = this.utilsSvc.searchFilter('string', this.candidates, value);
    return filtered;
  }


}

