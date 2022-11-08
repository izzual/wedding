import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'church-wedding',
    loadChildren: () => import('./church-wedding/church-wedding.module').then((m) => m.ChurchWeddingModule),
  },
  {
    path: 'civil-wedding',
    loadChildren: () => import('./civil-wedding/civil-wedding.module').then((m) => m.CivilWeddingModule),
  },
  {
    path: 'accommodation',
    loadChildren: () => import('./accommodation/accommodation.module').then((m) => m.AccommodationModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
