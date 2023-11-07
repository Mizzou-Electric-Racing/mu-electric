import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoDetailComponent } from './photo-detail.component';

describe('PhotoDetailComponent', () => {
  let component: PhotoDetailComponent;
  let fixture: ComponentFixture<PhotoDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoDetailComponent]
    });
    fixture = TestBed.createComponent(PhotoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
