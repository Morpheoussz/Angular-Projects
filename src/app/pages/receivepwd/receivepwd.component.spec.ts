import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivepwdComponent } from './receivepwd.component';

describe('ReceivepwdComponent', () => {
  let component: ReceivepwdComponent;
  let fixture: ComponentFixture<ReceivepwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivepwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivepwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
