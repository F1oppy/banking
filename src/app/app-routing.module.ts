import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountLockedPageComponent } from './account-locked-page/account-locked-page.component';
import { AccountComponent } from './account/account.component';
import { AddPayeeComponent } from './add-payee/add-payee.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotuseridComponent } from './forgotuserid/forgotuserid.component';
import { FpComponent } from './fp/fp.component';
import { HomeComponent } from './home/home.component';
import { IMPSTransactionComponent } from './imps-transaction/imps-transaction.component';
import { LoginComponent } from './login/login.component';
import { NEFTTransactionComponent } from './neft-transaction/neft-transaction.component';
import { OpenAnAccountComponent } from './open-an-account/open-an-account.component';
import { RegisterForInternetBankingComponent } from './register-for-internet-banking/register-for-internet-banking.component';
import { RTGSTransactionComponent } from './rtgs-transaction/rtgs-transaction.component';
import { SessionExpiredComponent } from './session-expired/session-expired.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';
import { TransactionSuccessfulComponent } from './transaction-successful/transaction-successful.component';

const routes: Routes = [
  {path: 'account', component: AccountComponent},
  {path: 'add-payee', component: AddPayeeComponent},
  {path: 'change-password', component: ChangePasswordComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'forgotuserid', component: ForgotuseridComponent},
  {path: 'fp', component: FpComponent},
  {path: 'home', component: HomeComponent},
  {path: 'imps-transaction', component: IMPSTransactionComponent},
  {path: 'login', component: LoginComponent},
  {path: 'neft-transaction', component: NEFTTransactionComponent},
  {path: 'open-an-account', component: OpenAnAccountComponent},
  {path: 'register-for-internet-banking', component: RegisterForInternetBankingComponent},
  {path: 'rtgs-transaction', component: RTGSTransactionComponent},
  {path: 'session-expired', component: SessionExpiredComponent},
  {path: 'set-new-password', component: SetNewPasswordComponent},
  {path: 'transaction-successful', component: TransactionSuccessfulComponent},
  {path: '',redirectTo: '/home', pathMatch: 'full'},
  {path: 'account-locked-page', component: AccountLockedPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [AccountComponent, AddPayeeComponent, ChangePasswordComponent, DashboardComponent, ForgotuseridComponent,
   FpComponent, HomeComponent, IMPSTransactionComponent, LoginComponent, NEFTTransactionComponent, OpenAnAccountComponent, RegisterForInternetBankingComponent,
  RTGSTransactionComponent, SessionExpiredComponent, SetNewPasswordComponent, TransactionSuccessfulComponent]
