import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedFlowerComponent } from './searched-flower.component';

describe('SearchedFlowerComponent', () => {
  let component: SearchedFlowerComponent;
  let fixture: ComponentFixture<SearchedFlowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchedFlowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedFlowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
