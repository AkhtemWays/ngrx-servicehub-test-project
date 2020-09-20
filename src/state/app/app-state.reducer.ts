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
    paginatedData: undefined,
  },
  bookmarks: {
    state: LoadingState.init,
    data: [],
    paginatedData: [],
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
    ): AppState => {
      const paginatedData = action.payload.slice(0, 5);
      return {
        ...state,
        search: {
          state: LoadingState.success,
          data: action.payload,
          paginatedData: [...paginatedData],
        },
      };
    }
  ),
  on(
    APP_ACTIONS.addBookmark,
    (
      state: AppState,
      action: Action & AppStateAddBookmarkPayload
    ): AppState => {
      const data = [...state.bookmarks.data, action.payload].filter(
        (bookmark: Post) =>
          bookmark.title.includes(state.filter) ||
          bookmark.body.includes(state.filter)
      );
      const paginatedData =
        data.length >= 5 ? data.slice(0, 5) : data.slice(0, data.length);
      return {
        ...state,
        bookmarks: {
          state: LoadingState.init,
          data: [...data],
          paginatedData: [...paginatedData],
        },
      };
    }
  ),
  on(
    APP_ACTIONS.removeBookmark,
    (
      state: AppState,
      action: Action & AppStateRemoveBookmarkPayload
    ): AppState => {
      const data = state.bookmarks.data.filter(
        (bookmark) => bookmark.id !== action.payload.id
      );
      const paginatedData =
        data.length >= 5 ? data.slice(0, 5) : data.slice(0, data.length);
      return {
        ...state,
        bookmarks: {
          state: LoadingState.init,
          data: [...data],
          paginatedData: [...paginatedData],
        },
      };
    }
  ),
  on(
    APP_ACTIONS.loadMoreBookmarksComponent,
    (state: AppState): AppState => ({
      ...state,
      bookmarks: {
        state: LoadingState.init,
        paginatedData: state.bookmarks.data.slice(
          0,
          state.bookmarks.paginatedData.length + 5
        ),
        data: state.bookmarks.data,
      },
    })
  ),
  on(
    APP_ACTIONS.loadMoreSearchComponent,
    (state: AppState): AppState => ({
      ...state,
      search: {
        state: LoadingState.init,
        paginatedData: state.search.data.slice(
          0,
          state.search.paginatedData.length + 5
        ),
        data: state.search.data,
      },
    })
  )
);
