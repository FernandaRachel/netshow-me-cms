import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarTransmissaoComponent } from './iniciar-transmissao.component';

describe('IniciarTransmissaoComponent', () => {
  let component: IniciarTransmissaoComponent;
  let fixture: ComponentFixture<IniciarTransmissaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciarTransmissaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarTransmissaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
