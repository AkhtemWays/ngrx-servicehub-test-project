import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppSearchData } from '../state/app/app-state.interface';

@Injectable({ providedIn: 'root' })
export class ApiService {
  // TODO Использовать реальный API, реализовать возможность догрузки данных
  constructor(private http: HttpClient) {}
  public loadData(filter: string): Observable<AppSearchData> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
      map(
        (data: AppSearchData): AppSearchData => {
          return data.filter(
            (post) => post.title.includes(filter) || post.body.includes(filter)
          );
        }
      )
    );
  }
}
