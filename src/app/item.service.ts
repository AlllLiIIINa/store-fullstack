import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private readonly apiHost = 'http://localhost:7237';

  constructor(private httpClient: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.httpClient.get<any>(`${this.apiHost}/items`)
      .pipe(
        map(response => (response as any[])
          .map(item => new Item(item.id, item.name, item.description, item.price)))
      );
  }
}
