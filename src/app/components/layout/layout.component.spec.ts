import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LayoutComponent } from './layout.component';

describe('Layout Component (Unit Testing) ', () => {
  let fixture: ComponentFixture<LayoutComponent>;
  let component: LayoutComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [LayoutComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
  });

  it('should LayoutComponent  create', () => {
    expect(component).toBeTruthy();
  });

  it('Should input have "page-container" class', () => {
    const div: HTMLElement = fixture.nativeElement.querySelector('div');
    fixture.detectChanges();
    expect(div.classList).toContain('page-container');
  });
});
