import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/material/material.module';

import { ButtonComponent } from './button.component';

describe('ButtonComponent unit testing', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MaterialModule],
      declarations: [ButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
  });

  it('should Button component  create', () => {
    expect(component).toBeTruthy();
  });

  it('should button element have class (btn) ', () => {
    // act
    const button: HTMLElement = fixture.nativeElement.querySelector('button');
    const className = button.classList;

    // assert
    expect(className).toContain('btn');
  });

  it("should correctly render the passed @Input('content') value ", () => {
    // arrange
    component.content = 'back';
    fixture.detectChanges();

    // act
    const button = fixture.nativeElement.querySelector('button');

    //assert
    expect(button.textContent).toContain('back');
  });

  it("should Button element No have Icon if @Input('icon') of null ", () => {
    // arrange
    component.icon = null;
    fixture.detectChanges();

    // act
    const button = fixture.nativeElement.querySelector('button');

    // assert
    expect(button.children.length).toBe(0);
  });

  it('should Button have a children is "mat-icon" when @Input(\'icon\') is string ', () => {
    // arrange
    component.icon = 'home';
    fixture.detectChanges();

    // act
    const button = fixture.nativeElement.querySelector('button');

    //assert
    expect(button.children[0].tagName.toLowerCase()).toBe('mat-icon');
  });
});
