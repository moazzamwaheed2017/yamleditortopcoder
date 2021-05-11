import { createReducer, on } from '@ngrx/store';
import { tableRowAction, tableTeamDataAction, tableTeamSearchedDataAction, tableUnassignedUsersDataAction, tableUnassignedUsersSearchedDataAction, tableVendorDataAction, tableVendorSearchedDataAction } from '../actions/table.action';

interface TableState {
    row: any;
    teamData: any;
    vendorData: any;
    unassignedUsersData: any;

    teamSearchedData: any;
    vendorSearchedData: any;
    unassignedUsersSearchedData: any;
}
const initialState: TableState  = {
    row: null, teamData: null, vendorData: null, unassignedUsersData: null,
    teamSearchedData: null,
    vendorSearchedData: null,
    unassignedUsersSearchedData: null
};

const _reducer = createReducer(initialState,
    on(tableRowAction, (s: TableState, data: any) => ({...s, row: data.payload})),
    on(tableTeamDataAction, (s: TableState, data: any) => ({...s, teamData: data.payload})),
    on(tableVendorDataAction, (s: TableState, data: any) => ({...s, vendorData: data.payload})),
    on(tableUnassignedUsersDataAction, (s: TableState, data: any) => ({...s, unassignedUsersData: data.payload})),

    on(tableTeamSearchedDataAction, (s: TableState, data: any) => ({...s, teamSearchedData: data.payload})),
    on(tableVendorSearchedDataAction, (s: TableState, data: any) => ({...s, vendorSearchedData: data.payload})),
    on(tableUnassignedUsersSearchedDataAction, (s: TableState, data: any) => ({...s, unassignedUsersSearchedData: data.payload})),
);

export const tableReducer = _reducer;
