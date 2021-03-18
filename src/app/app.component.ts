import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'world-around-angular';

  constructor(private themeService: ThemeService){}

  ngOnInit() {
    const mode = localStorage.getItem('active-mode');
    if(mode === 'light' || null) {
      this.themeService.setActiveMode('light')
    }
    else if(mode === 'dark') {
      this.themeService.setActiveMode('dark');
    }
  }

 
}
