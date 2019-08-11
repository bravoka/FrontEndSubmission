import { AccountDataModel, AccountModel } from '../shared/models';



export const MockAccountDataList: AccountDataModel[] = 
[
	{
		accountNumber: '001077091304',
		creationDate: '2019-01-08',
		chargeDate: '1 of the month',
		nextPaymentDate: '2018-11-01',
		status: 'Monthly Charge',
		monthlyInvestment: 50000,
		accumulatedInvestments: 50000,
		marketValue: 50011,
		currency: 'TWD'
	},
	{
		accountNumber: '112188120415',
		creationDate: '2016-02-22',
		chargeDate: '25 of the month',
		nextPaymentDate: '2019-11-25',
		status: 'Monthly Charge',
		monthlyInvestment: 3000000,
		accumulatedInvestments: 199999999,
		marketValue: 450780000,
		currency: 'HKD'
	},
	{
		accountNumber: '005288142983',
		creationDate: '2018-12-28',
		chargeDate: '7 of the month',
		nextPaymentDate: '2019-05-07',
		status: 'Monthly Charge',
		monthlyInvestment: 200000,
		accumulatedInvestments: 21500000,
		marketValue: 32500000,
		currency: 'TWD'
	}
]

export const MockDefaultAccountData: AccountDataModel = MockAccountDataList[0];

export const MockAccountList: AccountModel[] =
[
	{
		accountNumber: '001077091304',
		currency: 'TWD',
		balance: 50000
	},
	{
		accountNumber: '112188120415',
		currency: 'HKD',
		balance: 199999999
	},
	{
		accountNumber: '005288142983',
		currency: 'TWD',
		balance: 21500000
	}
]