import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'button[primaryBtn]'
})
export class PrimaryBtnDirective {
  @HostBinding('style.padding') padding: string = '12px 36px';

  @HostBinding('style.backgroundColor') backgroundColor: string = 'green';

  @HostBinding('style.color') fontColor: string = '#fff';


  constructor() { }

}
