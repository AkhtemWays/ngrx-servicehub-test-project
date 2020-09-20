import {
  AppBookmarksState,
  AppSearchState,
  Post,
} from './../../state/app/app-state.interface';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppStateService } from '../../state/app/app-state.service';
import { LoadingState } from '../../core/loading-state.enum';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmarks.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./bookmarks.component.scss'],
})
export class BookmarksComponent {
  public readonly LoadingState = LoadingState;
  public readonly state$: Observable<AppBookmarksState> = this.appStateService
    .bookmarks$;

  removeBookmark(bookmark: Post) {
    this.appStateService.removeBookmark(bookmark);
  }
  loadMore() {
    this.appStateService.loadMore('bookmarks');
  }

  constructor(private appStateService: AppStateService) {}
}
