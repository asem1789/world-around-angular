import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { InputComponent } from 'src/app/components/input/input.component';
import { SelectComponent } from 'src/app/components/select/select.component';
import { MaterialModule } from 'src/app/material/material.module';
import { HomePageComponent } from './home-page.component';

describe('HomePage Component (Unit Testing) ', () => {
  let fixture: ComponentFixture<HomePageComponent>;
  let component: HomePageComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MaterialModule, HttpClientModule],
      declarations: [HomePageComponent, InputComponent, SelectComponent],
      providers: [HttpClient],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should HomePageComponent create', () => {
    expect(component).toBeTruthy();
  });

  it('Should searchText = Eygpt value when call "onSearchingCountry(\'Eygpt\')"', () => {
    let name = 'Eygpt';
    component.onSearchingCountry(name);
    fixture.detectChanges();
    expect(component.searchText).toBe(name);
  });

  // it('Should select the same region the onFilterByRegion(value) not change it and return undefined', () => {
  //   component.searchRegion = "Africa"
  //   fixture.detectChanges();
  //   expect(component.onFilterByRegion("Africa")).toBe(undefined);
  // });
});
