import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Login3dComponent } from './login3d.component';

describe('Login3dComponent', () => {
  let component: Login3dComponent;
  let fixture: ComponentFixture<Login3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Login3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Login3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
