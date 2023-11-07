import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompOneComponent } from './comp-one.component';

describe('CompOneComponent', () => {
  let component: CompOneComponent;
  let fixture: ComponentFixture<CompOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompOneComponent]
    });
    fixture = TestBed.createComponent(CompOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
