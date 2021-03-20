import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  ComponentFixture,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { MaterialModule } from 'src/app/material/material.module';
// import { CountryInfo } from 'src/app/models';
// import { CountriesService } from 'src/app/services/countries.service';
import { DetailPageComponent } from './detail-page.component';

describe('Detail Page compoennt (Unit Testing) ', () => {
  let fixture: ComponentFixture<DetailPageComponent>;
  let component: DetailPageComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MaterialModule, HttpClientModule],
      declarations: [DetailPageComponent, ButtonComponent],
      providers: [HttpClient],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPageComponent);
    component = fixture.componentInstance;
  });

  it('should DetailPageComponent create', () => {
    expect(component).toBeTruthy();
  });

  it('shoud not render ".detail-content" black when loading is true', () => {
    component.loading = true;
    fixture.detectChanges();

    const content = fixture.nativeElement.querySelector('.detail-content');
    expect(content).toBeNull();
  });

  it('shoud render ".detail-content" black when loading is false', () => {
    component.loading = false;
    fixture.detectChanges();

    const content: HTMLElement = fixture.nativeElement.querySelector(
      '.detail-content'
    );
    expect(content.isConnected).toBeTruthy();
  });

  it('should component created ', () => {
    expect(component).toBeTruthy();
  });

});
