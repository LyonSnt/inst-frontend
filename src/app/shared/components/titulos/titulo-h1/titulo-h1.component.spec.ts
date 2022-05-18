import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloH1Component } from './titulo-h1.component';

describe('TituloH1Component', () => {
  let component: TituloH1Component;
  let fixture: ComponentFixture<TituloH1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloH1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloH1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
