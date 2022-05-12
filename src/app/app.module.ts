import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './owner/home/home.component';
import { CardtypemasterComponent } from './owner/cardtypemaster/cardtypemaster.component';
import { PumpregistrationComponent } from './owner/pumpregistration/pumpregistration.component';
import { ProductComponent } from './product/product.component';
import { PumpviewComponent } from './owner/pumpview/pumpview.component';
import { ProductviewComponent } from './owner/productview/productview.component';
import { CustomerRegistrationComponent } from './manager/customer-registration/customer-registration.component';
import { MhomeComponent } from './manager/mhome/mhome.component';
import { CustomerviewComponent } from './manager/customerview/customerview.component';
import { GuesthomeComponent } from './guesthome/guesthome.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { CareerviewComponent } from './owner/careerview/careerview.component';
import { ManagerregComponent } from './owner/managerreg/managerreg.component';
import { ManagerloginComponent } from './managerlogin/managerlogin.component';
import { FillingdetailsComponent } from './manager/fillingdetails/fillingdetails.component';
import { RateComponent } from './owner/rate/rate.component';
import { BillingComponent } from './manager/billing/billing.component';
import { ChomeComponent } from './customer/chome/chome.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { EditproductComponent } from './owner/editproduct/editproduct.component';
import { EditrateComponent } from './owner/editrate/editrate.component';
import { RateviewComponent } from './owner/rateview/rateview.component';
import { EditpumpComponent } from './owner/editpump/editpump.component';
import { DailysalesComponent } from './manager/dailysales/dailysales.component';
import { ManagerviewComponent } from './owner/managerview/managerview.component';
import { ReportComponent } from './owner/report/report.component';
import { PaymentComponent } from './customer/payment/payment.component';
import { ReceiptComponent } from './customer/receipt/receipt.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardtypemasterComponent,
    PumpregistrationComponent,
    ProductComponent,
    PumpviewComponent,
    ProductviewComponent,
    CustomerRegistrationComponent,
    MhomeComponent,
    CustomerviewComponent,
    GuesthomeComponent,
    AdminloginComponent,
    ContactComponent,
    AboutComponent,
    CareersComponent,
    CareerviewComponent,
    ManagerregComponent,
    ManagerloginComponent,
    FillingdetailsComponent,
    RateComponent,
    BillingComponent,
    ChomeComponent,
    CustomerloginComponent,
    EditproductComponent,
    EditrateComponent,
    RateviewComponent,
    EditpumpComponent,
    DailysalesComponent,
    ManagerviewComponent,
    ReportComponent,
    PaymentComponent,
    ReceiptComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
