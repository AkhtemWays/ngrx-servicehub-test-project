import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppStateEffects } from './app/app-state.effects';
import { APP_STATE_REDUCER } from './app/app-state.reducer';

@NgModule({
  imports: [
    StoreModule.forRoot({
      router: routerReducer,
      app: APP_STATE_REDUCER
    }),
    EffectsModule.forRoot([
      AppStateEffects
    ]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 50,
      logOnly: environment.production
    })
  ]
})
export class StateModule {
}
