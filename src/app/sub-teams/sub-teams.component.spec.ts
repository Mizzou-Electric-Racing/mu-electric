import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTeamsComponent } from './sub-teams.component';

describe('SubTeamsComponent', () => {
  let component: SubTeamsComponent;
  let fixture: ComponentFixture<SubTeamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubTeamsComponent]
    });
    fixture = TestBed.createComponent(SubTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
