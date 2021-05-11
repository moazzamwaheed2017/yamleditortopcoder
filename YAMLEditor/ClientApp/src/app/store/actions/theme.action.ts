import { createAction, props } from '@ngrx/store';

export const changeThemeAction = createAction('CHANGE_THEME_ACTION', props<{payload: any}>());
