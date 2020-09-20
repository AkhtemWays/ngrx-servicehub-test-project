import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmarksComponent } from '../pages/bookmarks/bookmarks.component';
import { SearchComponent } from '../pages/search/search.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'search',
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'bookmarks',
    component: BookmarksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
  declarations: [SearchComponent, BookmarksComponent],
})
export class AppRoutingModule {}
