import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private activeMode: string = 'light';

  getActiveMode() {
    return this.activeMode;
  }

  isDarkMode() {
    return this.activeMode === 'dark';
  }

  setActiveMode(mode: string): void {
    this.activeMode = mode;
    document.documentElement.setAttribute('data-color-mode', this.activeMode);
  }

}
