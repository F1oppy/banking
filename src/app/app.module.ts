import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterForInternetBankingComponent } from './register-for-internet-banking/register-for-internet-banking.component';
import { OpenAnAccountComponent } from './open-an-account/open-an-account.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SessionExpiredComponent } from './session-expired/session-expired.component';
import { AddPayeeComponent } from './add-payee/add-payee.component';
import { IMPSTransactionComponent } from './imps-transaction/imps-transaction.component';
import { NEFTTransactionComponent } from './neft-transaction/neft-transaction.component';
import { RTGSTransactionComponent } from './rtgs-transaction/rtgs-transaction.component';
import { TransactionSuccessfulComponent } from './transaction-successful/transaction-successful.component';
import { FpComponent } from './fp/fp.component';
import { ForgotuseridComponent } from './forgotuserid/forgotuserid.component';
import { AccountLockedPageComponent } from './account-locked-page/account-locked-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterForInternetBankingComponent,
    OpenAnAccountComponent,
    SetNewPasswordComponent,
    DashboardComponent,
    AccountComponent,
    ChangePasswordComponent,
    SessionExpiredComponent,
    AddPayeeComponent,
    IMPSTransactionComponent,
    NEFTTransactionComponent,
    RTGSTransactionComponent,
    TransactionSuccessfulComponent,
    FpComponent,
    ForgotuseridComponent,
    AccountLockedPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
