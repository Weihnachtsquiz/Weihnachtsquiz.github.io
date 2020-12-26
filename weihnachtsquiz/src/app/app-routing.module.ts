import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersviewComponent } from './playersview/playersview.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'playersview', component: PlayersviewComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }