import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';
import { BordersListService } from 'src/app/services/borders-list.service';

@Directive({
  selector: '[moveRight]',
})
export class MoveRightDirective implements OnInit {
  items: string[] = [];
  counter: number = 1;

  constructor(
    private readonly elRef: ElementRef,
    private readonly renderer: Renderer2,
    private borderSrv: BordersListService
  ) {}

  ngOnInit() {
    const el: HTMLElement = this.elRef.nativeElement;
    this.borderSrv.saveItem(el);
  }

  ngAfterViewInit() {
    this.startMove();
  }

  startMove() {
    const allList = this.borderSrv.getList();
    this.renderer.removeClass(allList[this.counter], 'hide');
    this.renderer.addClass(allList[this.counter], 'show');
    setTimeout(() => {
      this.counter += 1;
      if (this.counter < allList.length) {
        this.startMove();
      }
    }, 70);
  }
}
