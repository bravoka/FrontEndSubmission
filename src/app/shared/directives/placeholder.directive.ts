import { Directive, ViewContainerRef } from '@angular/core';


/**
 * A directive to act as a pointer to a container that we can reference.
 */
@Directive({
  selector: '[placeholder]'
})
export class PlaceholderDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
