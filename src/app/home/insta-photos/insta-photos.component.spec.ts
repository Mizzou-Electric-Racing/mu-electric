import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaPhotosComponent } from './insta-photos.component';

describe('InstaPhotosComponent', () => {
  let component: InstaPhotosComponent;
  let fixture: ComponentFixture<InstaPhotosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstaPhotosComponent]
    });
    fixture = TestBed.createComponent(InstaPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
