import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedkComponent } from './homedk.component';

describe('HomedkComponent', () => {
  let component: HomedkComponent;
  let fixture: ComponentFixture<HomedkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomedkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomedkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
