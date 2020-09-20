import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TabNavigatorConfig } from '../components/tab-navigator/tab-navigator-config.interface';
import { environment } from '../environments/environment';
import { AppStateService } from '../state/app/app-state.service';
import { StateRoot } from '../state/state-root.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public readonly navigationConfig: TabNavigatorConfig = [
    {
      name: 'Search',
      route: ['./', 'search'],
    },
    {
      name: 'Bookmarks',
      route: ['./', 'bookmarks'],
    },
  ];

  public readonly filter$: Observable<string> = this.appStateService.filter$;

  constructor(
    private appStateService: AppStateService,
    private store: Store<StateRoot>
  ) {
    if (!environment.production) {
      // tslint:disable-next-line
      window['dispatch'] = this.store.dispatch.bind(store);
    }
  }

  public setFilter(value: string): void {
    this.appStateService.setFilter(value);
  }
}
