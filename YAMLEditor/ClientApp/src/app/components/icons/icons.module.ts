import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconFilesComponent } from './icon-files/icon-files.component';
import { IconGitlabComponent } from './icon-gitlab/icon-gitlab.component';
import { IconManageComponent } from './icon-manage/icon-manage.component';
import { IconStreamsComponent } from './icon-streams/icon-streams.component';
import { IconVendorsComponent } from './icon-vendors/icon-vendors.component';
import { IconsComponent } from './icons.component';
import { IconSettingComponent } from './icon-setting/icon-setting.component';
import { IconYComponent } from './icon-y/icon-y.component';
import { IconSearchComponent } from './icon-search/icon-search.component';
import { IconSquareAddComponent } from './icon-square-add/icon-square-add.component';
import { IconSquareMinusComponent } from './icon-square-minus/icon-square-minus.component';
import { IconEditComponent } from './icon-edit/icon-edit.component';
import { IconDeleteComponent } from './icon-delete/icon-delete.component';
import { IconMoveComponent } from './icon-move/icon-move.component';
import { IconMoonComponent } from './icon-moon/icon-moon.component';
import { IconCaretComponent } from './icon-caret/icon-caret.component';
import { IconCloseComponent } from './icon-close/icon-close.component';



@NgModule({
  declarations: [
    IconFilesComponent,
    IconGitlabComponent,
    IconManageComponent,
    IconStreamsComponent,
    IconVendorsComponent,
    IconsComponent,
    IconSettingComponent,
    IconYComponent,
    IconSearchComponent,
    IconSquareAddComponent,
    IconSquareMinusComponent,
    IconEditComponent,
    IconDeleteComponent,
    IconMoveComponent,
    IconMoonComponent,
    IconCaretComponent,
    IconCloseComponent

  ],
  exports: [
    IconsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IconsModule { }
