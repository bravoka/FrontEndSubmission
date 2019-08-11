import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'button[outlineBtn]'
})
export class OutlineBtnDirective {
  @HostBinding('style.padding') padding: string = '5px 10px';

  @HostBinding('style.border') border:string = '1px solid #858585';

  @HostBinding('style.color') fontColor: string = '#858585';


  constructor() { }

}
