import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequesterTableComponent } from './requester-table.component';

describe('RequesterTableComponent', () => {
  let component: RequesterTableComponent;
  let fixture: ComponentFixture<RequesterTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequesterTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequesterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
