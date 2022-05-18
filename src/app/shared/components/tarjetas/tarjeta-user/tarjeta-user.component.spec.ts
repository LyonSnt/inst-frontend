import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaUserComponent } from './tarjeta-user.component';

describe('TarjetaUserComponent', () => {
  let component: TarjetaUserComponent;
  let fixture: ComponentFixture<TarjetaUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
