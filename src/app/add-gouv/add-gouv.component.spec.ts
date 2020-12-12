import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGouvComponent } from './add-gouv.component';

describe('AddGouvComponent', () => {
  let component: AddGouvComponent;
  let fixture: ComponentFixture<AddGouvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGouvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGouvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
