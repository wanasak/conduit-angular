import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { NgrxErrorActionTypes, Throw401Error } from './ngrx-error.action';
import { map } from 'rxjs/operators';

@Injectable()
export class NgrxErrorEffects {
  @Effect()
  error401$ = this.actions$
    .ofType<Throw401Error>(NgrxErrorActionTypes.THROW_401_ERROR)
    .pipe(map(_ => ({ type: '[Router] Go', payload: { path: ['/login'] } })));

  @Effect()
  error404$ = this.actions$
    .ofType<Throw401Error>(NgrxErrorActionTypes.THROW_404_ERROR)
    .pipe(map(_ => ({ type: '[Router] Go', payload: { path: ['/login'] } })));

  constructor(private actions$: Actions) {}
}
