import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgrxErrorState } from './ngrx-error.reducer';
import { Throw401Error, Throw404Error } from './ngrx-error.action';

@Injectable()
export class NgrxErrorFacade {
  constructor(private store: Store<NgrxErrorState>) {}

  throw401Error(error: HttpErrorResponse) {
    this.store.dispatch(new Throw401Error(error));
  }

  throw404Error(error: HttpErrorResponse) {
    this.store.dispatch(new Throw404Error(error));
  }
}
