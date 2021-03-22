import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BordersListService {
  private lists: HTMLElement[] = [];

  constructor() {}

  saveItem(item: HTMLElement): void {
    this.lists.push(item);
  }

  getList() {
    return this.lists;
  }
}
