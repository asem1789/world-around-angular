import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() content: string = 'click';
  @Input() icon: string | null = null;
  @Input() historyRoutes: any[] = [];
  @Input() isBack: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  onHandleClick(): void {
    // condition to ensure the button is clicked only type of back
    if (this.isBack && this.historyRoutes.length === 0) {
      this.router.navigate(['/countries']);
    }
    if (this.isBack && this.historyRoutes.length >= 1) {      
      this.historyRoutes.pop();
      if (this.historyRoutes.length === 0) {
        this.router.navigate(['/countries']);
      }else {
        let name = this.historyRoutes.pop();
        this.router.navigate(['/countries', name, 'detail']);        
      }
    }
  }
}
