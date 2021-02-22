import { Action } from '@ngrx/store'
import { Donut } from './../models/shop.model'
import * as ShopActions from './../actions/shop.actions'
import { Person } from './../models/person.model'


// Section 2
export function reducer(state: Donut[] = [], action: ShopActions.Actions) {

    // Section 3
    switch(action.type) {
        case ShopActions.ADD_DONUT:
            return [...state, action.payload];
        case ShopActions.REMOVE_DONUT:
            state.splice(action.payload, 1);
            return state;
        default:
            return state;
    }
} 