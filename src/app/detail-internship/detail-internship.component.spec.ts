import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailInternshipComponent } from './detail-internship.component';

describe('DetailInternshipComponent', () => {
  let component: DetailInternshipComponent;
  let fixture: ComponentFixture<DetailInternshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailInternshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailInternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
