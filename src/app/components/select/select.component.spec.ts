import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/material/material.module';
import { SelectComponent } from './select.component';

describe('Card-country Component (Unit Testing) ', () => {
  let fixture: ComponentFixture<SelectComponent>;
  let component: SelectComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MaterialModule],
      declarations: [SelectComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
  });

  it('should SelectComponent  create', () => {
    expect(component).toBeTruthy();
  });

  it('should selectedRegion vairable have to value based on searchRegion in onInit stage', () => {
    component.searchRegion = 'Africa';
    component.ngOnInit();

    fixture.detectChanges();

    expect(component.searchRegion).toBe('Africa');
  });

  it('should render ul element is "isSelected" = true', () => {
    component.isSelected = true;
    fixture.detectChanges();

    const ul: HTMLUListElement = fixture.nativeElement.querySelector('ul');

    expect(ul.isConnected).toBeTruthy();
  });

  it('should not render ul element is "isSelected" = false', () => {
    component.isSelected = false;
    fixture.detectChanges();

    const ul: HTMLUListElement = fixture.nativeElement.querySelector('ul');

    expect(ul).toBeFalsy();
  });

  it('should  \"isSelected\" = !isSelected  when \"toggleClick()\" called', () => {
    component.toggleClick();
    expect(component.isSelected).toBe(true);

    component.toggleClick();
    expect(component.isSelected).toBe(false);
  });

  it('Should emit region when choose \"Region\" with correct value', () => {
    spyOn(component.region, 'emit');
    
    component.onChooseValue('Asia');

    expect(component.region.emit).toHaveBeenCalledWith('Asia');

  });

  it('Should \"selectedRegion\" = Afric when onChooseValue(\'Africa\') is omit', () => {
    spyOn(component.region, 'emit');

    component.onChooseValue('Africa');

    expect(component.selectedRegion).toBe('Africa');

  });
});
