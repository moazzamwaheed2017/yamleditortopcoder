import { createReducer, on } from '@ngrx/store';
import { fetchDataAction } from '../actions/data.action';

interface DataState {
    content: any;
}

const initialState = { content: null};

const _reducer = createReducer(initialState,
    on(fetchDataAction, (s: any, data: any) => ({content: data.payload}))
    );

export const dataReducer = _reducer;
