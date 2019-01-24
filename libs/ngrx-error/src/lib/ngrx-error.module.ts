import { NgrxErrorEffects } from './+state/ngrx-error.effects';
import { NgModule } from '@angular/core';
import { NgrxErrorFacade } from './+state/ngrx-error.facade';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgrxErrorInterceptorService } from './ngrx-error-interceptor.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducer, ngrxErrorInitialState } from './+state/ngrx-error.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('ngrxError', reducer, {
      initialState: ngrxErrorInitialState
    }),
    EffectsModule.forFeature([NgrxErrorEffects])
  ],
  providers: [
    NgrxErrorFacade,
    NgrxErrorEffects,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NgrxErrorInterceptorService,
      multi: true
    }
  ]
})
export class NgrxErrorModule {}
