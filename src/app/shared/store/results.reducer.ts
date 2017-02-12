import { ActionReducer, Action } from '@ngrx/store';
import { Result } from '../models/result.model';
import { ADD_RESULT } from './results.action';

export const results: ActionReducer<Result[]> = (state: Result[] = [], action: Action) => {
    switch (action.type) {
        case ADD_RESULT:
            return [
                ...state,
                action.payload
            ];

        default:
            return state;
    }
};
