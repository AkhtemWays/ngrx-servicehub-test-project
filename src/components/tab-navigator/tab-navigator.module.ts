import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TabNavigatorComponent } from './tab-navigator.component';

@NgModule({
  exports: [TabNavigatorComponent],
  declarations: [TabNavigatorComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class TabNavigatorModule { }
