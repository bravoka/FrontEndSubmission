import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvestmentAccountComponent } from './views/investment-account/investment-account.component';
const routes: Routes = [
  { path: 'accounts', component: InvestmentAccountComponent },
  { path: '**', redirectTo: 'accounts'} // Redirect everything to accounts for this exercise
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
