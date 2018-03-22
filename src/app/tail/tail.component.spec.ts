import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TailComponent } from './tail.component';

describe('TailComponent', () => {
  let component: TailComponent;
  let fixture: ComponentFixture<TailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
