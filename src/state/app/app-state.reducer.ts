import { AppState, Post } from './app-state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { LoadingState } from '../../core/loading-state.enum';
import { APP_ACTIONS } from './app-state.actions';
import {
  AppStateAddBookmarkPayload,
  AppStateLoadSuccessPayload,
  AppStateRemoveBookmarkPayload,
  AppStateSetFilterPayload,
} from '../action-payload.inteface';

const INITIAL_STATE: AppState = {
  filter: '',
  search: {
    state: LoadingState.init,
    data: undefined,
  },
  bookmarks: {
    state: LoadingState.init,
    data: [],
  },
};

export const APP_STATE_REDUCER = createReducer<AppState>(
  INITIAL_STATE,
  on(
    APP_ACTIONS.setFilter,
    (state: AppState, action: Action & AppStateSetFilterPayload): AppState => ({
      ...state,
      filter: action.payload,
      search: {
        ...state.search,
        state: LoadingState.loading,
      },
    })
  ),
  on(
    APP_ACTIONS.loadSuccess,
    (
      state: AppState,
      action: Action & AppStateLoadSuccessPayload
    ): AppState => ({
      ...state,
      search: {
        state: LoadingState.success,
        data: action.payload,
      },
    })
  ),
  on(
    APP_ACTIONS.addBookmark,
    (
      state: AppState,
      action: Action & AppStateAddBookmarkPayload
    ): AppState => ({
      ...state,
      bookmarks: {
        state: LoadingState.init,
        data: [...state.bookmarks.data, action.payload].filter(
          (bookmark: Post) =>
            bookmark.title.includes(state.filter) ||
            bookmark.body.includes(state.filter)
        ),
      },
    })
  ),
  on(
    APP_ACTIONS.removeBookmark,
    (
      state: AppState,
      action: Action & AppStateRemoveBookmarkPayload
    ): AppState => ({
      ...state,
      bookmarks: {
        state: LoadingState.init,
        data: state.bookmarks.data.filter(
          (bookmark) => bookmark.id !== action.payload.id
        ),
      },
    })
  )
);
