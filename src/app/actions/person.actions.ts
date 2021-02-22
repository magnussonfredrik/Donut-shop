import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Person } from './../models/person.model'


export const ADD_PERSON      = '[PERSON] Add'
export const REMOVE_PERSON   = '[PERSON] Remove'

export class AddPerson implements Action {
    readonly type = ADD_PERSON
    constructor(public payload: Person) {}
}

export class RemovePerson implements Action {
    readonly type = REMOVE_PERSON
    constructor(public payload: number) {}
}

export type Actions = AddPerson | RemovePerson