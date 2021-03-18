import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private activeMode: string = 'light';


  isDarkMode() {
    return this.activeMode === 'dark';
  }

  setActiveMode(mode: string): void {
    this.activeMode = mode;
    localStorage.setItem('active-mode', `${mode}`)
    document.documentElement.setAttribute('data-color-mode', this.activeMode);
  }

}
