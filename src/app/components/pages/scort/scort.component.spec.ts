import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScortComponent } from './scort.component';

describe('ScortComponent', () => {
  let component: ScortComponent;
  let fixture: ComponentFixture<ScortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
