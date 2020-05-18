import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavRessourcesComponent } from './nav-ressources.component';

describe('NavRessourcesComponent', () => {
  let component: NavRessourcesComponent;
  let fixture: ComponentFixture<NavRessourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavRessourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavRessourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
