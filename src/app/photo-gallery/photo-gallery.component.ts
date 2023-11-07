import { Component } from '@angular/core';
import {Photo} from "../../photo";
import {PHOTOS, PHOTOS2} from "../PGList";
import {PhotoComponent} from "../photo/photo.component";

@Component({
  selector: 'app-photogallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotogalleryComponent {

  protected readonly PHOTOS = PHOTOS;
  protected readonly PHOTOS2 = PHOTOS2;

  leftScroll() {
      const left = document.querySelector(".sidescroll");
      // @ts-ignore
      left.scrollBy(-630, 0);
  }

  rightScroll() {

      const right = document.querySelector(".sidescroll");
      // @ts-ignore
      right.scrollBy(630  , 0);

  }

  leftScroll2() {
    const left = document.querySelector("#side2");
    // @ts-ignore
    left.scrollBy(-630, 0);
  }
  rightScroll2() {

    const right = document.querySelector("#side2");
    // @ts-ignore
    right.scrollBy(630  , 0);

  }



  leftScroll3() {
    const left = document.querySelector("#side3");
    // @ts-ignore
    left.scrollBy(-630, 0);
  }
  rightScroll3() {

    const right = document.querySelector("#side3");
    // @ts-ignore
    right.scrollBy(630  , 0);

  }
}