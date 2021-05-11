import { createReducer, on } from '@ngrx/store';
import { changeThemeAction } from '../actions/theme.action';

export type ThemeState = 'light'|'night';
const initialState: ThemeState = 'night';

const reducer = createReducer(initialState,
    on(changeThemeAction, (s: ThemeState, data: any) => data.payload),
);

export const themeReducer = reducer;
