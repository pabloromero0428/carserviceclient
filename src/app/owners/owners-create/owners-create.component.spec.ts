import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersCreateComponent } from './owners-create.component';

describe('OwnersCreateComponent', () => {
  let component: OwnersCreateComponent;
  let fixture: ComponentFixture<OwnersCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnersCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnersCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
