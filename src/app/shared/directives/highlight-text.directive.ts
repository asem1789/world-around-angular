import { Directive, Input, ElementRef, Renderer2, OnInit, OnChanges } from '@angular/core';
import { CountryInfo } from 'src/app/models';

@Directive({
  selector: '[highlightText]',
})
export class HighlightTextDirective  implements OnChanges {
  @Input() searchText: string = '';
  @Input() content!: string;
  @Input() classes!: string;

  constructor(
    private readonly elRef: ElementRef,
    private readonly renderer: Renderer2
  ) {}

  ngOnChanges(): void {

    if(!this.content){
      return;
    }

    this.renderer.setProperty(
      this.elRef.nativeElement,
      'innerHTML',
      this.makeFormatedText()      
    )
  }

  makeFormatedText() {
    const re = new RegExp(`(${this.searchText})`, 'i');
    return this.content.replace(re, `<span class="${this.classes}">$1</span>`);
  }


}
