import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, Renderer2, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'simple-select',
  templateUrl: './simple-select.component.html',
  styleUrls: ['./simple-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleSelectComponent implements OnInit {
  @ViewChild('selectItems') selectItems: ElementRef; 
  
  @Input() valueKey = 'value';
  @Input() options = [];
  @Input() model;
  @Input() disabled: boolean;
  
  @Output() closed = new EventEmitter();
  @Output() selectChange = new EventEmitter();
  
  private isOpen: boolean = false;

  constructor(private renderer: Renderer2) { 
  }

  ngOnInit() {
  }

  toggle():void {
    if (this.disabled) {
      return;
    }

  	if (!this.isOpen) {
  		this.showList();
  	}
  	else {
  		this.hideList();
  	}
  }

  showList():void {
	  this.renderer.removeClass(this.selectItems.nativeElement, 'select-hide');
	  this.isOpen = true;
  }

  hideList():void {
	  this.renderer.addClass(this.selectItems.nativeElement, 'select-hide');
	  this.isOpen = false;
  }

  select(index:number):void {
  	this.model = this.options[index][this.valueKey];
  	this.selectChange.emit(this.options[index]);
  	this.hideList();
  }

}
