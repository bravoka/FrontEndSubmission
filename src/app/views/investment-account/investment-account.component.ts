import { Component, OnInit, OnDestroy, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AccountService } from '../../shared/services';
import { PlaceholderDirective } from '../../shared/directives/placeholder.directive';
import { SwitchAccountModalComponent } from '../switch-account-modal/switch-account-modal.component';
import { Subscription } from 'rxjs';
import { AccountDataModel } from '../../shared/models';

@Component({
  selector: 'app-investment-account',
  templateUrl: './investment-account.component.html',
  styleUrls: ['./investment-account.component.scss']
})
export class InvestmentAccountComponent implements OnInit, OnDestroy {

  @ViewChild(PlaceholderDirective) placeholder: PlaceholderDirective;

  closeSub: Subscription;
  accountDataSub: Subscription;

  accountData: AccountDataModel;

  constructor(private accountService: AccountService,
    private componentFactoryResolver: ComponentFactoryResolver) { }


  ngOnInit() {
  	this.accountDataSub = this.accountService.getAccountData().subscribe(
	  data => {
      // This 'if' statement is only used in the exercise 
      // to call default data from a mock data source. In reality, 
      // it may call data from an API that selects the account by saved preferences.
      if (!data) {
  		  this.accountService.loadDefaultAccountData();
  		}
		  this.accountData = data;
	  }),
    error => {
      console.log('error');
    }

  }

  ngOnDestroy() {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
    this.accountDataSub.unsubscribe();
  }

  /**
   * Opens up a modal to allow the user to change current account.
   */
  onChangeAccount():void {

    const switchAccountModalFactory = this.componentFactoryResolver.resolveComponentFactory(SwitchAccountModalComponent);

    const placeholderContainerRef = this.placeholder.viewContainerRef;
    
    placeholderContainerRef.clear();

    const componentRef = placeholderContainerRef.createComponent(switchAccountModalFactory);

    // Pass the current account on the page to the modal so that it knows which one is selected.
    componentRef.instance.currentAccount = this.accountData.accountNumber;

    this.closeSub = componentRef.instance.closed.subscribe(() => {
      this.closeSub.unsubscribe();
      placeholderContainerRef.clear();
    });
  }

}
