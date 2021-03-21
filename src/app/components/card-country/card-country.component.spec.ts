import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CardCountryComponent } from './card-country.component';

describe('Card-country Component (Unit Testing) ', () => {
  let fixture: ComponentFixture<CardCountryComponent>;
  let component: CardCountryComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CardCountryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCountryComponent);
    component = fixture.componentInstance;
  });

  it('should CardCountryComponent  create', () => {
    expect(component).toBeTruthy();
  });

  it('should a element have class (card) ', () => {
    const card: HTMLElement = fixture.nativeElement.querySelector('a');
    const className = card.classList;

    expect(className).toContain('card');
  });

});
