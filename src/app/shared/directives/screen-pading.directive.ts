import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[screenPading]',
})
export class ScreenPadingDirective implements OnInit {
  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2
  ) {}

  // el: HTMLElement = this.elementRef.nativeElement;

  ngOnInit() {
    // if(this.el === null) return;

    // console.log("element: ", this.el);

    // this.renderer.addClass(this.el, 'nav-small')
  }
}
