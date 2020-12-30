import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedTermsComponent } from './searched-terms.component';

describe('SearchedTermsComponent', () => {
  let component: SearchedTermsComponent;
  let fixture: ComponentFixture<SearchedTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchedTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
