import { Post } from './app/app-state.interface';

export interface ActionPayload<T extends any> {
  payload: T;
}
export type AppStateSetFilterPayload = ActionPayload<string>;
export type AppStateLoadSuccessPayload = ActionPayload<Post[]>;
export type AppStateAddBookmarkPayload = ActionPayload<Post>;
export type AppStateRemoveBookmarkPayload = ActionPayload<Post>;
