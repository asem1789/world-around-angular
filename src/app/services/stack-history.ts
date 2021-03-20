import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StackHistoryService {
  public stackHistory: string[] = [];

  goFront(name: string): void {
    this.stackHistory.push(name);
  }

  goBack() {
    this.stackHistory.pop();
  }

  getLast(): string | null {
    if(this.stackHistory.length === 0) {
      return null;
    }
    return this.stackHistory[this.stackHistory.length - 1];
  }

  isEmpty(): boolean {
    return this.stackHistory.length === 0;
  }
}
