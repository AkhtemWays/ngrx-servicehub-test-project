import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StateRoot } from '../state-root.interface';
import { APP_ACTIONS } from './app-state.actions';
import { AppSearchState, Post, AppBookmarksState } from './app-state.interface';

@Injectable({ providedIn: 'root' })
export class AppStateService {
  public readonly filter$: Observable<string> = this.store.pipe(
    select('app', 'filter')
  );
  public readonly search$: Observable<AppSearchState> = this.store.pipe(
    select('app', 'search')
  );
  public readonly bookmarks$: Observable<AppBookmarksState> = this.store.pipe(
    select('app', 'bookmarks')
  );

  constructor(private store: Store<StateRoot>) {}

  public setFilter(payload: string): void {
    this.store.dispatch(APP_ACTIONS.setFilter({ payload }));
  }
  public addBookmark(payload: Post): void {
    this.store.dispatch(APP_ACTIONS.addBookmark({ payload }));
  }
  public removeBookmark(payload: Post): void {
    this.store.dispatch(APP_ACTIONS.removeBookmark({ payload }));
  }
  public loadMore(component: string) {
    component === 'search'
      ? this.store.dispatch(APP_ACTIONS.loadMoreSearchComponent())
      : this.store.dispatch(APP_ACTIONS.loadMoreBookmarksComponent());
  }
}
