import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService (Unit Testing) ', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ThemeService] });
    service = TestBed.inject(ThemeService);
  });

  it('should return false when call isDarkMode() as deafult value', () => {
    expect(service.isDarkMode()).toBe(false);
  });

  it('should return true when call isDarkMode after usring setActiveMode(\'dard\')', () => {
    service.setActiveMode('dark');
    expect(service.isDarkMode()).toBe(true);
  });
  
});
