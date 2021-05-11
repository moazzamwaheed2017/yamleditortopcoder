import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';
import { FETCH_DATA_EFFECT_TYPE, FETCH_DATA_TYPE, FETCH_DATA_ERROR_TYPE } from '../actions/data.action';

@Injectable()
export class DataEffects {

  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FETCH_DATA_EFFECT_TYPE),
      mergeMap(() => this.dataSvc.fetchData()
        .pipe(
          map(yamlContent => ({ type: `${FETCH_DATA_TYPE}`, payload: yamlContent })),
          catchError(() => of({ type: `${FETCH_DATA_ERROR_TYPE}` }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private dataSvc: DataService
  ) {}
}
