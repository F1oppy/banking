import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterForInternetBankingComponent } from './register-for-internet-banking/register-for-internet-banking.component';
import { OpenAnAccountComponent } from './open-an-account/open-an-account.component';
import { ForgetUserIDComponent } from './forget-user-id/forget-user-id.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FpComponent } from './fp/fp.component';
import { ForgotuseridComponent } from './forgotuserid/forgotuserid.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterForInternetBankingComponent,
    OpenAnAccountComponent,
    ForgetUserIDComponent,
    ForgetPasswordComponent,
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
    ForgotuseridComponent
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
