import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TabNavigatorConfig } from './tab-navigator-config.interface';

@Component({
  selector: 'app-tab-navigator',
  templateUrl: './tab-navigator.component.html',
  styleUrls: ['./tab-navigator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabNavigatorComponent {
  @Input() public config: TabNavigatorConfig = [];
}
