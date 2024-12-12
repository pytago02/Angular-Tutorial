import {Directive, ElementRef, HostListener} from '@angular/core';
import {Input} from '@angular/core';
@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input('appHighlight') appHighlight:string = '';
  constructor(private el: ElementRef) {}
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || 'red');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  private highlight(color: string) {
    console.log('Highlighting with color:', color);
    this.el.nativeElement.style.backgroundColor = color;
  }
}