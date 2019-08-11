import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { InvestmentAccountComponent } from './views/investment-account/investment-account.component';
import { OutlineBtnDirective } from './shared/directives/outline-btn.directive';
import { SwitchAccountModalComponent } from './views/switch-account-modal/switch-account-modal.component';
import { PlaceholderDirective } from './shared/directives/placeholder.directive';
import { PrimaryBtnDirective } from './shared/directives/primary-btn.directive';
import { SecondaryBtnDirective } from './shared/directives/secondary-btn.directive';

import { HttpClientModule } from '@angular/common/http';
import { SimpleSelectComponent } from './shared/components/simple-select/simple-select.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InvestmentAccountComponent,
    OutlineBtnDirective,
    SwitchAccountModalComponent,
    PlaceholderDirective,
    PrimaryBtnDirective,
    SecondaryBtnDirective,
    SimpleSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    SwitchAccountModalComponent
  ]
})
export class AppModule { }
