import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListgouvernoratComponent } from './listgouvernorat.component';

describe('ListgouvernoratComponent', () => {
  let component: ListgouvernoratComponent;
  let fixture: ComponentFixture<ListgouvernoratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListgouvernoratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListgouvernoratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
