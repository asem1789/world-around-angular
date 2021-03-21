import { Component, DebugElement, Directive } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HighlightTextDirective } from './highlight-text.directive';

@Component({
  template: `
    <h2
      highlightText
      [searchText]="pale"
      [content]="Palestine"
      [classes]="'highlight-text'"
    >
      Palestine
    </h2>
  `,
})
class TestComponent {}

describe('highlightText directive', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let headEl: DebugElement;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [HighlightTextDirective, TestComponent],
    }).createComponent(TestComponent);

    fixture.detectChanges();

    component = fixture.componentInstance;

    headEl = fixture.debugElement.query(By.directive(HighlightTextDirective));
  });

  it('should create component', ()=> {
    expect(component).toBeDefined();
  })

  it('should h2 have HighlightTextDirective', () => {
    expect(headEl.nativeElement).toBeDefined();
  });
 
});
