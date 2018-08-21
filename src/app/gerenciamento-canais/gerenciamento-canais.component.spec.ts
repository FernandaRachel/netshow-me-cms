import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciamentoCanaisComponent } from './gerenciamento-canais.component';

describe('GerenciamentoCanaisComponent', () => {
  let component: GerenciamentoCanaisComponent;
  let fixture: ComponentFixture<GerenciamentoCanaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciamentoCanaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciamentoCanaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
