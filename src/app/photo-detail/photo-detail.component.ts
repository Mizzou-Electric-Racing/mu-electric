import { Component, Input } from '@angular/core';
import{Photo} from "../../photo";
import {ActivatedRoute} from "@angular/router";
import{Location} from "@angular/common";
import {PhotoService} from "../../photo.service";
import {PHOTOS} from "../PGList";
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})

export class PhotoDetailComponent {
  constructor(
      private route:ActivatedRoute,
      private photoService: PhotoService,
      private location:Location
  ) {
  }

  @Input() photo?: Photo;

  ngOnInit():void{
    this.getPhoto()
  }
  getPhoto(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const car =Number(this.route.snapshot.paramMap.get('car'));
    this.photoService.getPhoto(id,car)
        .subscribe(photo => this.photo = photo)
  }
  goBack(): void{
    this.location.go("/photo-gallery");
    window.location.reload();
  }
  nextPhoto(): void{
    // @ts-ignore
    const x = this.photo?.id+1;
  if(x !=36) {
    this.location.go("/photo-gallery/" + this.photo?.car + "/" + x);
    window.location.reload();
  }
  }
  prevPhoto(): void{

    // @ts-ignore
    var y = this.photo?.id -1;
    //@ts-ignore
    var x = this.photo?.car
  if(y !=0) {
  this.location.go("/photo-gallery/" + x + "/" + y);
  window.location.reload();
  }
  }
  protected readonly PHOTOS = PHOTOS;
  protected readonly Number = Number;

}