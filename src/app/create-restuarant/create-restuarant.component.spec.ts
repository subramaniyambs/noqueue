import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRestuarantComponent } from './create-restuarant.component';

describe('CreateRestuarantComponent', () => {
  let component: CreateRestuarantComponent;
  let fixture: ComponentFixture<CreateRestuarantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRestuarantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRestuarantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
