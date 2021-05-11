import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sh-theme-listener',
  templateUrl: './sh-theme-listener.component.html',
  styleUrls: ['./sh-theme-listener.component.scss']
})
export class ShThemeListenerComponent implements OnInit {

  @Input() set theme(mode: string) {
    this.changeTheme(mode);
  }

  constructor() { }

  ngOnInit(): void {
  }

  changeTheme(mode: string) {
    if (mode === 'night'){
      this.changeNightTheme();
    } else {
      this.changeLightTheme();
    }
  }
  changeLightTheme() {
    document.documentElement.style.setProperty('--black1', '#f4f4f4');
    document.documentElement.style.setProperty('--black2', 'white');
    document.documentElement.style.setProperty('--black3', 'white');
    document.documentElement.style.setProperty('--white', 'black');
  }
  changeNightTheme() {
    document.documentElement.style.setProperty('--black1', '#161718');
    document.documentElement.style.setProperty('--black2', '#111213');
    document.documentElement.style.setProperty('--black3', '#161718');
    document.documentElement.style.setProperty('--white', 'white');
  }

}
