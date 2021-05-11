import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { toggleSidenav } from 'src/app/store/actions/sidenav.action';
import { changeThemeAction } from 'src/app/store/actions/theme.action';
import { ThemeState } from 'src/app/store/reducer/theme.reducer';

export interface SidebarMenuItem {
  icon: any;
  label: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  themeMode: 'light'|'night' = 'night';

  selected = {
      icon: 'files',
      label: 'Files',
      route: 'files'
  };

    menus = [
    {
      icon: 'files',
      label: 'Files',
      route: 'files'
    },
    {
      icon: 'gitlab',
      label: 'Gitlab',
      route: 'gitlab'
    },  
    {
      icon: 'manage',
      label: 'Manage',
      route: 'manage'
    },
    {
      icon: 'vendors',
      label: 'Vendors',
      route: 'vendors'
    },
    {
      icon: 'streams',
      label: 'Streams',
      route: 'streams'
    }
  ];

  profile = {
    avatar: '/assets/icons/avatar0.svg'
  };

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
  }

  menuClick(menu: SidebarMenuItem) {
    this.router.navigate([menu.route]);

    this.selected = menu;
  }

  changeTheme(theme: ThemeState) {
    this.themeMode = theme;
    this.store.dispatch(changeThemeAction({payload: theme}));
  }

}
