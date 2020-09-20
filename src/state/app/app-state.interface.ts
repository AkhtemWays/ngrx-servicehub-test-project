import { LoadableData } from '../../core/loadable-data.interface';

// TODO Описать интерфейс хранения результатов поиска
export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export type AppSearchData = Post[];

export type AppSearchState = LoadableData<AppSearchData>;
// TODO Описать интерфейс хранения закладок
export type AppBookmarksData = Post[];
export type AppBookmarksState = LoadableData<AppBookmarksData>;

export interface AppState {
  filter: string;
  search: AppSearchState;
  bookmarks: AppBookmarksState;
}
