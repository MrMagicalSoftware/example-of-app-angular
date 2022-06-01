import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleForComponent } from './example-for.component';

describe('ExampleForComponent', () => {
  let component: ExampleForComponent;
  let fixture: ComponentFixture<ExampleForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
