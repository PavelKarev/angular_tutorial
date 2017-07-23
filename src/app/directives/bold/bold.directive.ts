import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective {

  constructor(private _el: ElementRef) { }
  
  @HostListener('mouseenter') onmouseenter () {
    this._el.nativeElement.style.fontWeight = 'bold';
  }
  @HostListener('mouseleave') mouseleave () {
    this._el.nativeElement.style.fontWeight = null;
  }
}
