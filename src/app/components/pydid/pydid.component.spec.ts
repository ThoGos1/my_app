import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PydidComponent } from './pydid.component';

describe('PydidComponent', () => {
  let component: PydidComponent;
  let fixture: ComponentFixture<PydidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PydidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PydidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
