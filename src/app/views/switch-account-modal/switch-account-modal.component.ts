import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../../shared/services';
import { AccountModel } from '../../shared/models';
import { Subscription } from 'rxjs';
import { finalize, first } from 'rxjs/operators';

/**
 * This modal is specific to allow the user to switch the current account.
 */
@Component({
  selector: 'app-switch-account-modal',
  templateUrl: './switch-account-modal.component.html',
  styleUrls: ['./switch-account-modal.component.scss']
})
export class SwitchAccountModalComponent implements OnInit {
  @Output() closed = new EventEmitter();
  accountList: AccountModel[];
  currentAccount: string;
  selected: AccountModel;
  isLoading: boolean = true;
  
  constructor(private accountService: AccountService) { }


  ngOnInit() {
    this.accountService.getAccounts()
      .pipe(first(), finalize(() => this.isLoading = false))
      .subscribe(list => {
        this.accountList = list;
        this.selected = list.find(x => {return x.accountNumber === this.currentAccount})
      })
  }

  /**
   * Changes the temporarily selected account number.
   */
  onChangeSelected(selected: AccountModel) {
    this.selected = selected;
  }

  /**
   * Tells AccountService to query for the account details of the chosen account
   * and the service should save that account into state.
   */
  onSwitchAccount() {
    this.accountService.changeCurrentAccount(this.selected.accountNumber).subscribe(
      result => {
        if (result) {
          this.closeModal();
        }
      },
      error => {
        console.log('Error changing account');
      }
    );
  }

  closeModal() {
  	this.closed.emit(true);
  }

}
