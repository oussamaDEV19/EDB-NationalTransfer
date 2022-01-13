import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserSucComponent } from './add-user-suc.component';

describe('AddUserSucComponent', () => {
  let component: AddUserSucComponent;
  let fixture: ComponentFixture<AddUserSucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserSucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserSucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
