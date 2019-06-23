import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-button-container',
  templateUrl: './button-container.component.html',
  styleUrls: ['./button-container.component.scss']
})
export class ButtonContainerComponent implements OnInit {
  @ViewChild('buttonARef', {static: false}) buttonATemplateReference: any;
  @ViewChild('buttonBRef', {static: false}) buttonBTemplateReference: any;
  constructor() { 
    
  }
  ngOnInit() {
    window.addEventListener('click', () => this.resetAllToolTip(), true);
    window.addEventListener('keydown', ($event) => this.newFunc(event));
  }
  newFunc(event) {
    if(event.code=='Escape'){
      this.resetAllToolTip();
    }
  }
  resetAllToolTip() {
    this.buttonATemplateReference.hideTooltip();
    this.buttonBTemplateReference.hideTooltip();
  }  
}
