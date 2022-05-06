import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequesterAddrequestComponent } from './requester-addrequest.component';

describe('RequesterAddrequestComponent', () => {
  let component: RequesterAddrequestComponent;
  let fixture: ComponentFixture<RequesterAddrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequesterAddrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequesterAddrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
