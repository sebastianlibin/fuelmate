import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {
  dropdowndata() {
    throw new Error('Method not implemented.');
  }
  constructor(private http:HttpClient) { }
  //Send pump registration data and viewing
  sendPumpData(data: any) {
    return this.http.post("http://127.0.0.1/Fuelmate/dbconnection.php",data).toPromise()
    }
  viewData() {
    return this.http.get("http://127.0.0.1/Fuelmate/viewpump.php").toPromise()
    }
    //sending product registration data and viewing
  sendproductData(data: any) {
    return this.http.post("http://127.0.0.1/Fuelmate/productinsert.php",data).toPromise()
    }
  viewproductData() {
    return this.http.get("http://127.0.0.1/Fuelmate/productview.php").toPromise()
    }
    //sending customer registration data and viewing
  sendcregData(data: any) {
    return this.http.post("http://127.0.0.1/Fuelmate/cregins.php",data).toPromise()
    }
  cviewData() {
    return this.http.get("http://127.0.0.1/Fuelmate/coustview.php").toPromise()
   } 
   //sending career registartion data and viewing
  sendcareerData(data: any) {
    return this.http.post("http://127.0.0.1/Fuelmate/careerinsert.php",data).toPromise()
   }      
  careerviewData() {
    return this.http.get("http://127.0.0.1/Fuelmate/careerview.php").toPromise()
   }
   //admin login function
  SendLogindata(data: any) {
    return this.http.post("http://127.0.0.1/Fuelmate/adminlogin.php",data).toPromise()
   } 
   //Manager Login
   SendmanagerLogindata(data: any) {
    return this.http.post("http://127.0.0.1/Fuelmate/managerlogin.php",data).toPromise()
   }
   //Customer Login
   SendCustomerLogindata(data: any) {
    return this.http.post("http://127.0.0.1/Fuelmate/customer_login.php",data).toPromise()
   }
   //drop down pump registration    
 dropdown(){
  return this.http.get("http://127.0.0.1/Fuelmate/dropdown.php").toPromise()
   }
   //sending manager registration data and viewing
  sendmanagerData(data: any) {
   return this.http.post("http://127.0.0.1/Fuelmate/managerinsertion.php",data).toPromise()
    }
  sendfillingData(data: any) {
    return this.http.post("http://127.0.0.1/Fuelmate/fill.php",data).toPromise()
     }
  productdrop(){
    return this.http.get("http://127.0.0.1/Fuelmate/productdrop.php").toPromise()
    }
  dropproduct(){
     return this.http.get("http://127.0.0.1/Fuelmate/dropproduct.php").toPromise()
     }
  sendrateData(data: any) {
    return this.http.post("http://127.0.0.1/Fuelmate/rateinsert.php",data).toPromise()
    }
    //sending data form bill to tbl_recepit
  sendbillData(data: any) {
    return this.http.post("http://127.0.0.1/Fuelmate/bill.php",data).toPromise()
    }
  droporg(){
    return this.http.get("http://127.0.0.1/Fuelmate/droporg.php").toPromise()
    }
  //Owner product edit and updation
   getproductid(p_id: any) {
   return this.http.post("http://127.0.0.1/Fuelmate/editproduct.php", p_id).toPromise()
   }
  productupdatedata(data: any) {
  return this.http.post("http://127.0.0.1/Fuelmate/updateproduct.php",data).toPromise()
   }
   //Rate edit and update function
  getrateid(r_id: any) {
  return this.http.post("http://127.0.0.1/Fuelmate/getrateid.php", r_id).toPromise()
   }
   rateupdatedata(data: any) {
  return this.http.post("http://127.0.0.1/Fuelmate/updaterate.php",data).toPromise()
   }
   //Owner rate view function
  viewrateData() {
    return this.http.get("http://127.0.0.1/Fuelmate/rateview.php").toPromise()
   }
   //pump registration edit functions
   getpumpid(p_id: any) {
    return this.http.post("http://127.0.0.1/Fuelmate/getpumpid.php", p_id).toPromise()
     }
  pumpupdatedata(data: any) {
   return this.http.post("http://127.0.0.1/Fuelmate/pumpupdate.php",data).toPromise()
   }
   //dailysales ts page
   senddailysalesData(data: any) {
    return this.http.post("http://127.0.0.1/Fuelmate/sales.php",data).toPromise()
    }
    //Opening stock view in dailysales 
    openingstockdata() {
    return this.http.get("http://127.0.0.1/Fuelmate/openingstock.php").toPromise()
     }
    //manager view function
managerviewData() {
  return this.http.get("http://127.0.0.1/Fuelmate/managerview.php").toPromise()
  }
  //delete product
  productdeletedata(data: any){
    return this.http.get("http://127.0.0.1/Fuelmate/productdelete.php").toPromise()
  }
  //get report
  getreport(data: any) {
    return this.http.post("http://127.0.0.1/Fuelmate/report.php",data).toPromise()
    }
  //payment
  insertpaymentData(data: any) {
    return this.http.post("http://127.0.0.1/Fuelmate/payment.php",data).toPromise()
    }
}

