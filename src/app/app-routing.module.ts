import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './owner/home/home.component';
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

const routes: Routes = [
                         {path:'Guesthome',component:GuesthomeComponent},
                         {path:'adminlogin',component:AdminloginComponent},
                         {path:'managerlogin',component:ManagerloginComponent},
                         {path:'contact',component:ContactComponent},
                         {path:'aboutus',component:AboutComponent},
                         {path:'career',component:CareersComponent},
                         {path:'customerlogin',component:CustomerloginComponent},

                         {path:'home',component:HomeComponent,children:[
                         {path:'pumpregistration',component:PumpregistrationComponent},
                         {path:'product',component:ProductComponent},
                         {path:'pumpview',component:PumpviewComponent},
                         {path:'productview',component:ProductviewComponent},
                         {path:'careerview',component:CareerviewComponent},
                         {path:'managerreg',component:ManagerregComponent},
                         {path:'rate',component:RateComponent},
                         {path:'viewrate',component:RateviewComponent},
                         {path:'editpump/:id',component:EditpumpComponent},
                         {path:'editproduct/:id',component:EditproductComponent},
                         {path:'editrate/:id',component:EditrateComponent},
                         {path:'managerview',component:ManagerviewComponent},
                         {path:'report',component:ReportComponent}
                         ]},
                          {path:'mhome',component:MhomeComponent,children:[
                          {path:'customer-registration',component:CustomerRegistrationComponent},
                          {path:'customerview',component:CustomerviewComponent},
                          {path:'fillingdetails',component:FillingdetailsComponent},
                          {path:'bill',component:BillingComponent},
                          {path:'dailysales',component:DailysalesComponent}
                        ]},
                          {path:'chome',component:ChomeComponent,children:[
                            {path:'payment',component:PaymentComponent},
                            {path:'receipt',component:ReceiptComponent}
                          ]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
