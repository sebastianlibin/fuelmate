import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';
@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  public dataarray: any[] = [];
  constructor(private fb:FormBuilder,private dbservice:DbserviceService,private router:Router) { }
  bill=this.fb.group({
    Product_id:[''],
    bdate:[''],
    cname:[''],
    oname:[''],
    quantity:[''],
    amount:['']
  })
   get fcontrols(){
     return this.bill.controls;
   }
   onSubmit(){
    this.dbservice.sendbillData(this.bill.value).then((confirmation:any)=>{console.log(confirmation);
    if(confirmation.alert==="Sucess"){
     alert('Ok')
    }})
    console.log(this.bill.value);
    }

  ngOnInit(): void {
    this.dbservice.droporg().then((data :any)=>{ 
      this.dataarray=data
    })
  }
}
