import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent implements OnInit {

  public dataarray: any[] = [];
  constructor(private fb:FormBuilder,private dbservice:DbserviceService) { }
  rateform=this.fb.group({
    Product_id:[''],
    cdate:[''],
    newrate:['']
  })
   get fcontrols(){
     return this.rateform.controls;
   }
   onSubmit(){
    this.dbservice.sendrateData(this.rateform.value).then((confirmation:any)=>{console.log(confirmation);
    if(confirmation.alert==="Sucess"){
     alert('Ok')
    }})
    console.log(this.rateform.value);
    }
  ngOnInit(): void {
    this.dbservice.productdrop().then((data :any)=>{ 
      this.dataarray=data
    })
  }
}
