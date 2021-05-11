import { createReducer, on } from '@ngrx/store';
import { openSidenav, toggleSidenav } from '../actions/sidenav.action';

const initialState = true;

const _reducer = createReducer(initialState,
    on(toggleSidenav, (s: boolean) => !s),
    on(openSidenav, (s: boolean) => true)
    );

// export default function reducer(state, action) {
//     _reducer(state, action);
// }

export const sidenavReducer = _reducer;
