import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-more',
  templateUrl: './show-more.component.html',
  styleUrls: ['./show-more.component.scss']
})
export class ShowMoreComponent implements OnInit, AfterViewInit {

  @Input() set text(v: string) {
    this.show = false;
    this._text = v || '';
    this.sliceText();
  }
  get text() {
    return this._text;
  }
  // thresholdLines=2
  thresholdTextLength = 105;

  show = false;
  showShowMore = true;
  displayText = '';
  _text = '';

  el: HTMLElement;
  target?: HTMLElement;
  fontHeight = 10;

  constructor(private elementRef: ElementRef) {
    this.el = elementRef.nativeElement;
  }
  ngAfterViewInit(): void {
    // this.target = this.el.querySelector(".target") as HTMLElement;
    // const width = this.target.clientWidth
    // const height = this.target.clientHeight
    // const lines = Math.round( (height + 0.499*this.fontHeight)/this.fontHeight )
    // if(lines > thresholdLines) {

    // }

  }

  ngOnInit(): void {
  }

  sliceText() {
    this.displayText = this.text;
    if (!this.show) {
      if (this.text.length > this.thresholdTextLength) {
        this.showShowMore = true;
        this.displayText = this.text.slice(0, this.thresholdTextLength) + '...';
      } else {
        this.showShowMore = false;
      }
    }
  }

  showMore() {
    this.show = !this.show;
    this.sliceText();

  }


}
