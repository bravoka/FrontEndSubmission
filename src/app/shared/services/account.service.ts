import { Injectable } from '@angular/core';

import { AccountDataModel, AccountModel } from '../models';

import { BehaviorSubject, Observable, of } from 'rxjs';

import { delay } from 'rxjs/operators';

import { MockDefaultAccountData, MockAccountList, MockAccountDataList } from '../../mocks';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  /** 
   * STATE STORE
   */
  private accountData: BehaviorSubject<AccountDataModel> = new BehaviorSubject<AccountDataModel>(null);
  
  // My sample does not interact with accountList because in real life we may 
  // query for the list of accounts each time in case the accounts have changed
  private accountList: BehaviorSubject<AccountModel[]> = new BehaviorSubject<AccountModel[]>(null);
  

  /** 
   * STATE OBSERVABLES
   */
  accountData$: Observable<AccountDataModel> = this.accountData.asObservable();
  accountList$: Observable<AccountModel[]> = this.accountList.asObservable();

  /**
   * We are using mock data as constants, but we could have used mock data 
   * with http and a mock-interceptor instead
   */
  constructor(private http: HttpClient) { 

  }

  /**
   * subscribe to the observable and mimic http response time with a delay 
   * feed a value to accountData to be multicasted to the observers
   */  
  loadDefaultAccountData() {
  	this.useMockDefaultData().pipe(delay(1000)).subscribe(data => { this.accountData.next(data)});
  }

  /**
   * Get our mock default data 
   */
  useMockDefaultData(): Observable<AccountDataModel> {
  	return of(MockDefaultAccountData);
  }

  /**
   * A helper method to point to our observable
   */
  getAccountData(): Observable<AccountDataModel> {
  	return this.accountData$;
  }

  /**
   * Load a new account state into store. For this exercise, we delay the result to simulate a 
   * real http request where we would query the DB by an account number.
   */
  changeCurrentAccount(accountNumber: string): Observable<boolean> {
    let delayResult = new Observable(x => x.next())
      .pipe(delay(250)) // mimic a small delay for server request
      .subscribe(() => {
        this.accountData.next(MockAccountDataList.find(x => x.accountNumber === accountNumber));
        delayResult.unsubscribe();
      });
    return of(true);
  }

  /**
   * A helper method to point to our observable
   */
  loadAccountList() {
    this.useMockAccountList().pipe(delay(1000)).subscribe(data => { this.accountList.next(data)})
  }

  /**
   * Get our mock accounts list
   */
  useMockAccountList(): Observable<AccountModel[]> {
    return of(MockAccountList);
  }

  /**
   * A helper method to point to our observable with a simulated delay of 1s.
   *
   */
  getAccounts(): Observable<AccountModel[]> {
    // return this.http.get(`https://capcokelvinyan.com/api/accounts`);
    return this.useMockAccountList().pipe(delay(1000));
  }

}
