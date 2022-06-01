import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetcherComponent } from './fetcher.component';

describe('FetcherComponent', () => {
  let component: FetcherComponent;
  let fixture: ComponentFixture<FetcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
