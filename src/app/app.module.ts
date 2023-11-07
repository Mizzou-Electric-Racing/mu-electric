import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoComponent } from './logo/logo.component';
import { HeroImgComponent } from './home/hero-img/hero-img.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/about/about.component';
import { InstaPhotosComponent } from './home/insta-photos/insta-photos.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { ContactComponent } from './home/contact/contact.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HistoryComponent } from './history/history.component';
import { CompetitionComponent } from './competition/competition.component';
import { SubTeamsComponent } from './sub-teams/sub-teams.component';
import { SubTeamOneComponent } from './sub-teams/sub-team-one/sub-team-one.component';
import { CompOneComponent } from './competition/comp-one/comp-one.component';
import { PhotoComponent } from './photo/photo.component';
import { PhotogalleryComponent } from './photo-gallery/photo-gallery.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { SubTeamTwoComponent } from './sub-teams/sub-team-two/sub-team-two.component';
import { SubTeamThreeComponent } from './sub-teams/sub-team-three/sub-team-three.component';
import { SubTeamFourComponent } from './sub-teams/sub-team-four/sub-team-four.component';
import { SubTeamFiveComponent } from './sub-teams/sub-team-five/sub-team-five.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogoComponent,
    HeroImgComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    InstaPhotosComponent,
    SponsorsComponent,
    ContactComponent,
    HistoryComponent,
    CompetitionComponent,
    PhotogalleryComponent,
    SubTeamsComponent,
    SubTeamOneComponent,
    CompOneComponent,
    PhotoComponent,
    PhotoDetailComponent,
    SubTeamTwoComponent,
    SubTeamThreeComponent,
    SubTeamFourComponent,
    SubTeamFiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
