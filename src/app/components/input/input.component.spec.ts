import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/material/material.module';
import { InputComponent } from './input.component';

describe('Card-country Component (Unit Testing) ', () => {
  let fixture: ComponentFixture<InputComponent>;
  let component: InputComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MaterialModule],
      declarations: [InputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
  });

  it('should InputComponent  create', () => {
    expect(component).toBeTruthy();
  });

  it('Should emit when input tag have any new value ', () => {
    spyOn(component.searchInput, 'emit');
    const input = fixture.nativeElement.querySelector('input');
    input.value = "pale"
    input.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(component.searchInput.emit).toHaveBeenCalledWith('pale');

  });

});
