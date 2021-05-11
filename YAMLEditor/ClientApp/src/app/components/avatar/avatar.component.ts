import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input() imageSize: 'small' | 'middle' | 'big' = 'small';

  @Input() set username(v: string) {
    this._username = v;
    if (!this.avatarPlaceHolder && !this._name) {
      this.setAvatarPlaceholder(v);
    }
  }
  @Input() set name(v: string) {
    this._name = v;
    // if(v) {
    //   this._name = v;
    //   const splited= v.split(/\s/).filter(x => !!x);
    //   this.avatarPlaceHolder = splited.map( s => s[0]).join("")
    // }

    this.setAvatarPlaceholder(v);
  }
  @Input() avatar = '';
  @Input() showName = false;
  @Input() direction: 'row'|'column' = 'row';
  @Input() duty = '';

  _name = '';
  _username = '';
  avatarPlaceHolder = '';
  randomColor = 'black';
  constructor() { }

  ngOnInit(): void {
    const colors = ['orange', 'purple', 'gray', 'blue'];
    const randomIndex = Math.min(colors.length - 1, Math.floor(Math.random() * colors.length));
    this.randomColor = colors[randomIndex];
  }

  setAvatarPlaceholder(v: string) {
    if (v) {
      // this._name = v;
      const splited = v.split(/\s/).filter(x => !!x);
      this.avatarPlaceHolder = splited.map( s => s[0]).join('');
      if (this.avatarPlaceHolder.length > 2) {
        this.avatarPlaceHolder = this.avatarPlaceHolder.slice(0, 2);
      }
      if (this.avatarPlaceHolder.length < 2) {
        this.avatarPlaceHolder = v.slice(0, 2);
      }
    }
  }

}
