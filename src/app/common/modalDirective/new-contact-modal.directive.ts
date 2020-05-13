import { Directive, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appNewContactModal]',
})
export class NewContactModalDirective {
  @Input() id;
  constructor(public viewContainerRef: ViewContainerRef) { }

}
