import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShSelectGroupsComponent } from './sh-select-groups/sh-select-groups.component';
import { ShThemeListenerComponent } from './sh-theme-listener/sh-theme-listener.component';



@NgModule({
  declarations: [
    ShSelectGroupsComponent,
    ShThemeListenerComponent
  ],
  exports: [
    ShSelectGroupsComponent,
    ShThemeListenerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
