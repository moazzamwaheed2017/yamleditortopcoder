import { createAction, props } from '@ngrx/store';

export const tableRowAction = createAction('TABLE_ROW_ACTION', props<{payload: any}>());
export const tableTeamDataAction = createAction('TABLE_TEAM_DATA_ACTION', props<{payload: any}>());
export const tableUnassignedUsersDataAction = createAction('TABLE_UNASSIGNED_USERS_ACTION', props<{payload: any}>());
export const tableVendorDataAction = createAction('TABLE_VENDOR_DATA_ACTION', props<{payload: any}>());

export const tableTeamSearchedDataAction = createAction('TABLE_TEAM_SEARCHED_DATA_ACTION', props<{payload: any}>());
export const tableUnassignedUsersSearchedDataAction = createAction('TABLE_UNASSIGNED_USERS_SEARCHED_DATA_ACTION', props<{payload: any}>());
export const tableVendorSearchedDataAction = createAction('TABLE_VENDOR_SEARCHED_DATA_ACTION', props<{payload: any}>());
