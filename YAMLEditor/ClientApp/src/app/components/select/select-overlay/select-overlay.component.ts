import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-overlay',
  templateUrl: './select-overlay.component.html',
  styleUrls: ['./select-overlay.component.scss']
})
export class SelectOverlayComponent implements OnInit {

  @Input() options: any[] = [];
  @Output() valueChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
