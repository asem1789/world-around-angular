import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeIconComponent } from './mode-icon.component';

describe('ModeIconComponent', () => {
  let component: ModeIconComponent;
  let fixture: ComponentFixture<ModeIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
