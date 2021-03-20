import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/material/material.module';
import { NavComponent } from './nav.component';

describe('Card-country Component (Unit Testing) ', () => {
  let fixture: ComponentFixture<NavComponent>;
  let component: NavComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MaterialModule],
      declarations: [NavComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
  });

  it('should NavComponent  create', () => {
    expect(component).toBeTruthy();
  });
});
