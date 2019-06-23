import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, HostListener } from '@angular/core';


@Component({
  selector: 'app-btn-custom-tooltip',
  templateUrl: './btn-custom-tooltip.component.html',
  styleUrls: ['./btn-custom-tooltip.component.scss']
})
export class BtnCustomTooltipComponent implements OnInit {
  @Input('btnText') buttonText: string;
  @Output() restTooltip = new EventEmitter();
  @ViewChild('tooltipRef', {static: false}) tooltipTemplateReference: ElementRef;
  isTooltipVisible = false;
  showTooltipAbove = true;
  constructor() { }
  hideTooltip() {
    this.isTooltipVisible = false;
  }
  ngOnInit() {
  }
  @HostListener('window:scroll', ['$event']) onScroll(event) {
      console.log(document.documentElement.scrollTop);
      if(document.documentElement.scrollTop<88){
        this.showTooltipAbove = true;
      } else {
        this.showTooltipAbove = false;
      }
  }
  showToolTip() {
    this.restTooltip.emit();
    this.isTooltipVisible = true;
    //alert(this.tooltipTemplateReference.nativeElement.scrollTop);
  }
}
