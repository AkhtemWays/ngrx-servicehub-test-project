import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { ApiService } from '../../api/api.service';
import { StateRoot } from '../state-root.interface';
import { APP_ACTIONS } from './app-state.actions';

@Injectable()
export class AppStateEffects {
  public readonly search$ = createEffect(
    (): Observable<Action> =>
      this.actions$.pipe(
        ofType(APP_ACTIONS.setFilter),
        withLatestFrom(this.store.pipe(select('app', 'filter'))),
        mergeMap(
          ([, filter]: [Action, string]): Observable<Action> =>
            this.apiService.loadData(filter).pipe(
              map(
                (payload: any): Action => {
                  console.log(payload);
                  return APP_ACTIONS.loadSuccess({ payload });
                }
              )
            )
        )
      )
  );

  constructor(
    private actions$: Actions,
    private store: Store<StateRoot>,
    private apiService: ApiService
  ) {}
}
