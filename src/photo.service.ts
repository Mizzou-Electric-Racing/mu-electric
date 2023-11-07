import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import{Photo} from "./photo";
import {PHOTOS} from "./app/PGList";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() {

  }
  getPhotos(): Observable<Photo[]>{
    const photos = of(PHOTOS);
    return photos;
  }
  getPhoto(id: number, car:number): Observable<Photo>{

    const photo = PHOTOS.find(h=>h.id ===id)!;

    return of(photo)
  }


}