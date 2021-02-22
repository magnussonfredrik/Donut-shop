// Section 1
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Donut } from './../models/shop.model'


// Section 2
export const ADD_DONUT       = '[DONUT] Add'
export const REMOVE_DONUT    = '[DONUT] Remove'


// Section 3

export class AddDonut implements Action {
    readonly type = ADD_DONUT
    constructor(public payload: Donut) {}
}

export class RemoveDonut implements Action {
    readonly type = REMOVE_DONUT
    constructor(public payload: number) {}
}



// Section 4
export type Actions = AddDonut | RemoveDonut