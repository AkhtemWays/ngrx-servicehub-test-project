import { createAction, props } from '@ngrx/store';
import {
  AppStateAddBookmarkPayload,
  AppStateLoadSuccessPayload,
  AppStateRemoveBookmarkPayload,
  AppStateSetFilterPayload,
} from '../action-payload.inteface';

const setFilter = createAction(
  'APP_STATE/SET_FILTER',
  props<AppStateSetFilterPayload>()
);

const loadSuccess = createAction(
  'APP_STATE/LOAD_SUCCESS',
  props<AppStateLoadSuccessPayload>()
);

const addBookmark = createAction(
  'APP_STATE/ADD_BOOKMARK',
  props<AppStateAddBookmarkPayload>()
);

const removeBookmark = createAction(
  'APP_STATE/REMOVE_BOOKMARK',
  props<AppStateRemoveBookmarkPayload>()
);

const loadMoreSearchComponent = createAction(
  'APP_STATE/SEARCH_COMPONENT/LOAD_MORE'
);
const loadMoreBookmarksComponent = createAction(
  'APP_STATE/BOOKMARKS_COMPONENT/LOAD_MORE'
);

export const APP_ACTIONS = {
  setFilter,
  loadSuccess,
  addBookmark,
  removeBookmark,
  loadMoreSearchComponent,
  loadMoreBookmarksComponent,
};
