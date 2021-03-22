import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[moveDown]',
})
export class MoveDownDirective implements OnInit {
  el: HTMLElement;
  constructor(
    private readonly elRef: ElementRef,
    private readonly renderer: Renderer2
  ) {
    const el: HTMLElement = this.elRef.nativeElement;
    this.el = el;
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.startMove();
  }

  startMove() {
    this.renderer.removeClass(this.el, 'down-hide');
    this.renderer.addClass(this.el, 'down-show');
  }
}
