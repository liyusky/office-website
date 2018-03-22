import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerNavComponent } from './server-nav.component';

describe('ServerNavComponent', () => {
  let component: ServerNavComponent;
  let fixture: ComponentFixture<ServerNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
