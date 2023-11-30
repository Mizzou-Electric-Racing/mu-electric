import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { CompOneComponent } from './competition/comp-one/comp-one.component';
import { CompetitionComponent } from './competition/competition.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { PhotogalleryComponent } from './photo-gallery/photo-gallery.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { SubTeamFiveComponent } from './sub-teams/sub-team-five/sub-team-five.component';
import { SubTeamFourComponent } from './sub-teams/sub-team-four/sub-team-four.component';
import { SubTeamOneComponent } from './sub-teams/sub-team-one/sub-team-one.component';
import { SubTeamThreeComponent } from './sub-teams/sub-team-three/sub-team-three.component';
import { SubTeamTwoComponent } from './sub-teams/sub-team-two/sub-team-two.component';
import { SubTeamsComponent } from './sub-teams/sub-teams.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { animationState: 'One' } },
  { path: 'sponsors', component: SponsorsComponent, data: { animationState: 'Two' } },
  { path: 'history', component: HistoryComponent, data: { animationState: 'One' } },
  { path: 'competition', component: CompetitionComponent, data: { animationState: 'Two' } },
  { path: 'june-2023', component: CompOneComponent, data: { animationState: 'One' } },
  { path: 'photo-gallery', component: PhotogalleryComponent, data: { animationState: 'Two' }},
  { path: 'aerodynamics', component: SubTeamOneComponent, data: { animationState: 'One' },},
  { path: 'brakes-controls', component: SubTeamTwoComponent, data: { animationState: 'Two' },},
  { path: 'electronics', component: SubTeamThreeComponent, data: { animationState: 'One' },},
  { path: 'powertrain', component: SubTeamFourComponent, data: { animationState: 'Two' },},
  { path: 'vehicle-dynamics', component: SubTeamFiveComponent, data: { animationState: 'One' },},
  {path:'photo-gallery/:car/:id',component:PhotoDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
