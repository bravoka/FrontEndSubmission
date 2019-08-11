import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'button[secondaryBtn]'
})
export class SecondaryBtnDirective {
  @HostBinding('style.padding') padding: string = '12px 36px';

  @HostBinding('style.backgroundColor') backgroundColor: string = '#e2e2e2';

  @HostBinding('style.color') fontColor: string = '#555555';

  constructor() { }

}
