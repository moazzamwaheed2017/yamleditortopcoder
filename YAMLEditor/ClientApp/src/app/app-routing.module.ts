import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ManageComponent } from './pages/manage/manage.component';

const routes: Routes = [
  {
    path: '',
    // pathMatch: 'full',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  // {
  //   path: 'landing',
  //   loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
