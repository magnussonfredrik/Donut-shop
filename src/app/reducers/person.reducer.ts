import { Action } from '@ngrx/store'
import * as PersonActions from './../actions/person.actions'
import { Person } from './../models/person.model'


export function reducer(state: Person[] = [] , action: PersonActions.Actions) {

    // Section 3
    switch(action.type) {
        case PersonActions.ADD_PERSON:
            return [...state, action.payload];
        case PersonActions.REMOVE_PERSON:
            state.splice(action.payload, 1);
            return state;
        default:
            return state;
    }
} 