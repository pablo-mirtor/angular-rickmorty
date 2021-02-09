import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationDetailsComponent } from './components/location-details/location-details.component';
import { LocationsListComponent } from './components/locations-list/locations-list.component';

const routes: Routes = [
  {
    path:"location",
    component: LocationsListComponent,
  },
  {
    path:"location/:name",
    component: LocationDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
