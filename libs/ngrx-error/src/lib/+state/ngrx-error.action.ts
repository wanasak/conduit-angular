import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum NgrxErrorActionTypes {
  THROW_401_ERROR = '[NgrxError] THROW_401_ERROR',
  THROW_404_ERROR = '[NgrxError] THROW_404_ERROR'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class Throw401Error implements Action {
  readonly type = NgrxErrorActionTypes.THROW_401_ERROR;

  constructor(public payload: HttpErrorResponse) {}
}

export class Throw404Error implements Action {
  readonly type = NgrxErrorActionTypes.THROW_404_ERROR;

  constructor(public payload: HttpErrorResponse) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type NgrxErrorActions = Throw401Error | Throw404Error;
