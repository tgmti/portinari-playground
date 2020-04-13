import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadoEditComponent } from './chamado-edit.component';

describe('ChamadoEditComponent', () => {
  let component: ChamadoEditComponent;
  let fixture: ComponentFixture<ChamadoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamadoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamadoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
