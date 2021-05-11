import { createAction } from '@ngrx/store';

export const FETCH_DATA_TYPE = 'FETCH_DATA_TYPE';
export const FETCH_DATA_EFFECT_TYPE = 'FETCH_DATA_EFFECT_TYPE';
export const FETCH_DATA_ERROR_TYPE = 'FETCH_DATA_ERROR_TYPE';

export const fetchDataAction = createAction(FETCH_DATA_TYPE);
