import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/material/material.module';
import { ModeIconComponent } from '../mode-icon/mode-icon.component';
import { NavComponent } from './nav.component';

describe('Nav Component (Unit Testing) ', () => {
  let fixture: ComponentFixture<NavComponent>;
  let component: NavComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MaterialModule],
      declarations: [NavComponent, ModeIconComponent],
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
