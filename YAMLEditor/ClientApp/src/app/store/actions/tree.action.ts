import { createAction, props } from '@ngrx/store';

export const treeNodeClickAction = createAction('TREE_NODE_CLICK', props<{payload: any}>());
