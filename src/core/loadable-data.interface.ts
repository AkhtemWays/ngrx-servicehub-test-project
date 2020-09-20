import { LoadingState } from './loading-state.enum';

export interface LoadableData<T extends any> {
  state: LoadingState;
  data: T;
}
