import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequesterProfileComponent } from './requester-profile.component';

describe('RequesterProfileComponent', () => {
  let component: RequesterProfileComponent;
  let fixture: ComponentFixture<RequesterProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequesterProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequesterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
