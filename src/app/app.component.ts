import { Component } from '@angular/core';
import { ThemeService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'world-around-angular';

  constructor(private themeService: ThemeService){}

  toggleTheme() {
    if(this.themeService.isDarkMode()){
      this.themeService.setActiveMode('light');
    } else {
      this.themeService.setActiveMode('dark');
    }
  }

}
