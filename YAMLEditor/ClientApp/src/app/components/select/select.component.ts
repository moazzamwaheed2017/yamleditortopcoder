import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectOverlayComponent } from './select-overlay/select-overlay.component';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() options: any[] = [];
  @Input() label = '';
  @Output() valueChange = new EventEmitter();

  value = '';

  control = new FormControl();

  openOverlay = false;
  overlayType = SelectOverlayComponent;

  constructor() { }

  ngOnInit(): void {
    this.control.valueChanges.subscribe( value => {
      this.valueChange.emit(value);
    });
  }

  overlayValueChange(v: string) {
    this.openOverlay = false;
    this.value = v;
    this.valueChange.emit(v);
  }

}
