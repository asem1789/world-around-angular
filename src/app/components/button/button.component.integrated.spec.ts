import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { Router } from '@angular/router';

import { ButtonComponent } from './button.component';
import { routes } from '../../app-routing.module';
import { StackHistoryService } from 'src/app/services';

describe('ButtonComponent Integration test', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [ButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
  });

  it('should not called any function when click on button, Which "isBack" = false', () => {
    component.isBack = true;
    const button = fixture.nativeElement.querySelector('button');

    expect(button.click()).toBe(undefined);
  });

  it("should stackHistory[0]= palestine, when stackHistory = ['palestine', 'egypt'], after click on the button, and \"isBack\" = true", () => {
    component.isBack = true;
    const stackService = TestBed.inject(StackHistoryService);
    stackService.stackHistory = ['palestine', 'egypt'];
    const button = fixture.nativeElement.querySelector('button');
    button.click();

    expect(stackService.stackHistory.length).toBe(1);
    expect(stackService.stackHistory[0]).toBe('palestine');
  });
});
