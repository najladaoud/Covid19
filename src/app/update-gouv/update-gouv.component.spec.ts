import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGouvComponent } from './update-gouv.component';

describe('UpdateGouvComponent', () => {
  let component: UpdateGouvComponent;
  let fixture: ComponentFixture<UpdateGouvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateGouvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGouvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
