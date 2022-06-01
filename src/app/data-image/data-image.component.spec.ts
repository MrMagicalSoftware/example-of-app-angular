import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataImageComponent } from './data-image.component';

describe('DataImageComponent', () => {
  let component: DataImageComponent;
  let fixture: ComponentFixture<DataImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
