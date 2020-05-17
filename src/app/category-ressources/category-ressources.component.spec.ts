import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryRessourcesComponent } from './category-ressources.component';

describe('CategoryRessourcesComponent', () => {
  let component: CategoryRessourcesComponent;
  let fixture: ComponentFixture<CategoryRessourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryRessourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryRessourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
