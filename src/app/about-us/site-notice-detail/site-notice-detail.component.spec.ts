import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteNoticeDetailComponent } from './site-notice-detail.component';

describe('SiteNoticeDetailComponent', () => {
  let component: SiteNoticeDetailComponent;
  let fixture: ComponentFixture<SiteNoticeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteNoticeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteNoticeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
