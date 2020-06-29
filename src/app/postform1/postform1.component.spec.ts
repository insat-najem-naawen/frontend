import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Postform1Component } from './postform1.component';

describe('Postform1Component', () => {
  let component: Postform1Component;
  let fixture: ComponentFixture<Postform1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Postform1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Postform1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
