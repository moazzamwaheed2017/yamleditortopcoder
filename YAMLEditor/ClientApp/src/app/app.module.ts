import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SidenavDrawerComponent } from './components/sidenav/sidenav-drawer/sidenav-drawer.component';
import { SidenavMainComponent } from './components/sidenav/sidenav-main/sidenav-main.component';
import { ButtonComponent } from './components/button/button.component';
import { FilesystemTreeComponent } from './components/filesystem-tree/filesystem-tree.component';
import { EditorComponent } from './components/editor/editor.component';
import { EditorHeaderComponent } from './components/editor/editor-header/editor-header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { StoreModule } from '@ngrx/store';
import { sidenavReducer } from './store/reducer/sidenav.reducer';
import { MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageComponent } from './pages/manage/manage.component';
import { SearchComponent } from './components/search/search.component';
import { GroupTreeComponent } from './components/group-tree/group-tree.component';
import { TeamMetaComponent } from './components/team-meta/team-meta.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { ExpansionComponent } from './components/expansion/expansion.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { ShowMoreComponent } from './components/show-more/show-more.component';
import { DotsComponent } from './components/dots/dots.component';
import { HoverDotsComponent } from './components/hover-dots/hover-dots.component';
import { DotsActionsComponent } from './components/dots-actions/dots-actions.component';
import { HttpClientModule } from '@angular/common/http';
import { dataReducer } from './store/reducer/data.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DataEffects } from './store/effects/data.effects';
import { treeReducer } from './store/reducer/tree.reducer';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { tableReducer } from './store/reducer/table.reducer';
import { EditUserComponent } from './components/modal/edit-user/edit-user.component';
import { MovetoAnotherTeamComponent } from './components/modal/moveto-another-team/moveto-another-team.component';
import { SelectComponent } from './components/select/select.component';
import { ConfirmationComponent } from './components/modal/confirmation/confirmation.component';
import { AssignToTeamComponent } from './components/modal/assign-to-team/assign-to-team.component';
import { EditVendorComponent } from './components/modal/edit-vendor/edit-vendor.component';
import { AppMaterialModule } from './material-module';
import { UnassignedUserListComponent } from './components/unassigned-user-list/unassigned-user-list.component';
import { VendorListComponent } from './components/vendor-list/vendor-list.component';
import { VendorsComponent } from './pages/vendors/vendors.component';
import { FilesComponent } from './pages/files/files.component';
import { IconsModule } from './components/icons/icons.module';
import { CardComponent } from './components/card/card.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { InputComponent } from './components/input/input.component';
import { SharedComponent } from './components/shared/shared.component';
import { SharedModule } from './components/shared/shared.module';
import { AddVendorComponent } from './components/modal/add-vendor/add-vendor.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { SelectOverlayComponent } from './components/select/select-overlay/select-overlay.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { ModalBaseComponent } from './components/modal/modal-base/modal-base.component';
import { themeReducer } from './store/reducer/theme.reducer';

const monacoConfig: NgxMonacoEditorConfig = {
  // baseUrl: 'yaml-editor-ui/assets', // configure base path for monaco editor default: './assets'
  // defaultOptions: { scrollBeyondLastLine: false }, // pass default options to be used

  // here monaco object will be available as window.monaco use this function to extend monaco editor functionalities.
  onMonacoLoad: () => { console.log((window as any).monaco); }

};

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HomeComponent,
    SidebarComponent,
    SidenavComponent,
    SidenavDrawerComponent,
    SidenavMainComponent,
    ButtonComponent,
    FilesystemTreeComponent,
    EditorComponent,
    EditorHeaderComponent,
    ManageComponent,
    SearchComponent,
    GroupTreeComponent,
    TeamMetaComponent,
    TeamListComponent,
    ExpansionComponent,
    AvatarComponent,
    ShowMoreComponent,
    DotsComponent,
    HoverDotsComponent,
    DotsActionsComponent,
    BreadcrumbsComponent,
    EditUserComponent,
    MovetoAnotherTeamComponent,
    SelectComponent,
    ConfirmationComponent,
    AssignToTeamComponent,
    EditVendorComponent,
    UnassignedUserListComponent,
    VendorListComponent,
    VendorsComponent,
    FilesComponent,
    CardComponent,
    SpinnerComponent,
    InputComponent,
    SharedComponent,
    AddVendorComponent,
    OverlayComponent,
    SelectOverlayComponent,
    ModalBaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTreeModule,
    MatIconModule,
    NgScrollbarModule,
    StoreModule.forRoot({sidenav: sidenavReducer, data: dataReducer, tree: treeReducer,
      table: tableReducer, theme: themeReducer
    }, {}),
    FormsModule,
    ReactiveFormsModule,
    MonacoEditorModule.forRoot(),
    HttpClientModule,
    EffectsModule.forRoot([DataEffects]),
    MatMenuModule,
    MatDialogModule,
    MatTableModule,
    AppMaterialModule,
    IconsModule,
    SharedModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
