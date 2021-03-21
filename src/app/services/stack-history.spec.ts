import { TestBed } from '@angular/core/testing';
import { StackHistoryService } from './stack-history';

describe('ThemeService (Unit Testing) ', () => {
  let service: StackHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [StackHistoryService] });
    service = TestBed.inject(StackHistoryService);
  });

  it('should return true when call isEmpty() first', () => {
    expect(service.isEmpty()).toBe(true);
  });

  it('should return false when call isEmpty() after using goFront()', () => {
    service.goFront('Palestine');
    expect(service.isEmpty()).toBe(false);
    expect(service.getLast()).toBe('Palestine');
  });

  it('should goBack work as expected', () => {
    service.goFront('Palestine');
    service.goFront('Egypt');

    service.goBack();
    expect(service.getLast()).toBe('Palestine', 'should be Palestine');
  });
});
