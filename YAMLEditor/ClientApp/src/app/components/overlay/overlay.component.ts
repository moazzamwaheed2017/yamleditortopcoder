import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
  @Input() set compType(type: ComponentType<unknown>) {
    this._compType = type;

    this.toggleOverlay();

  }
  @Input() set open(v: boolean) {
    this.isOpen = v;

    this.toggleOverlay();
  }

  isOpen = false;
  _compType?: ComponentType<unknown>;
  overlayRef?: OverlayRef;

  constructor(private overlay: Overlay) { }

  ngOnInit(): void {

  }

  toggleOverlay() {
    if (this.isOpen) {
      if (this._compType) {
        this.overlayRef = this.overlay.create({
          height: '400px',
          width: '600px',
        });
        const userProfilePortal = new ComponentPortal(this._compType);
        this.overlayRef.attach(userProfilePortal);
      }
    } else {
      if (this.overlayRef?.hasAttached){
        this.overlayRef.detach();
      }
    }
  }

}
