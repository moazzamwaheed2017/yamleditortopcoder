import { createReducer, on } from '@ngrx/store';
import { treeNodeClickAction } from '../actions/tree.action';

export interface TreeStateData {
    layers: any[];
    node: any;
}
interface TreeState {
    data: TreeStateData | null;
}
const initialState: TreeState  = {data: null};

const reducer = createReducer(initialState,
    on(treeNodeClickAction, (s: TreeState, data: any) => ({data: data.payload})),
    );

export const treeReducer = reducer;
