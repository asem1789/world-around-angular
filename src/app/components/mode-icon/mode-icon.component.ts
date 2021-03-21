import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services';

@Component({
  selector: 'app-mode-icon',
  templateUrl: './mode-icon.component.html',
  styleUrls: ['./mode-icon.component.css'],
})
export class ModeIconComponent implements OnInit {
  isDark: boolean = false;

  constructor(
    private themeService: ThemeService,
  ) {}

  ngOnInit(): void {
    this.isDark = localStorage.getItem('active-mode') === 'dark'
  }

  setDark(value: boolean): void {
    this.isDark = value;
  }

  toggleTheme(): void {
    if (this.themeService.isDarkMode()) {
      this.themeService.setActiveMode('light');
      this.setDark(false);
    } else {
      this.themeService.setActiveMode('dark');
      this.setDark(true);
    }
  }
}
