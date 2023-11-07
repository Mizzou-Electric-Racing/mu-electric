import { Component } from '@angular/core';
import {Photo} from "../../photo";
import {PHOTOS} from "../PGList";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {
 photo: Photo={
   car:74,
   id:1,
   path:"./assets/PhotoGallery/Car74/TILT.jpg",
   title:"Car tilt test!",
   description:"THe car going through the tilt test"
 }
  protected readonly PHOTOS = PHOTOS;
}