import { Component,  Input } from '@angular/core';
import { Router } from '@angular/router';
import { StackHistoryService } from 'src/app/services';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent  {
  @Input() content: string = 'click';
  @Input() icon: string | null = null;
  @Input() isBack: boolean = false;

  constructor(
    private router: Router,
    private stackHistory: StackHistoryService
  ) {}


  onHandleClick(): void {
    if (this.isBack ) {
      this.stackHistory.goBack();
      const last = this.stackHistory.getLast();
      if(!last){
          this.router.navigate(['/countries']);
      }else {
        this.router.navigate(['/countries', last, 'detail']);
      }
    }
  }
}
