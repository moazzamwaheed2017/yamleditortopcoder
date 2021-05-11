import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilesComponent } from '../files/files.component';
import { ManageComponent } from '../manage/manage.component';
import { VendorsComponent } from '../vendors/vendors.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'manage'
      },
      {
        path: 'files',
        component: FilesComponent
      },
      {
        path: 'manage',
        component: ManageComponent
      },
      {
        path: 'vendors',
        component: VendorsComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
