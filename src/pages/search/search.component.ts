import { APP_ACTIONS } from './../../state/app/app-state.actions';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingState } from '../../core/loading-state.enum';
import { AppSearchState, Post } from '../../state/app/app-state.interface';
import { AppStateService } from '../../state/app/app-state.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  public readonly LoadingState = LoadingState;
  public readonly state$: Observable<AppSearchState> = this.appStateService
    .search$;

  addToCollection(post: Post) {
    this.appStateService.addBookmark(post);
  }

  constructor(private appStateService: AppStateService) {}
}
