import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DbserviceService } from 'src/app/dbservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dailysales',
  templateUrl: './dailysales.component.html',
  styleUrls: ['./dailysales.component.scss']
})
export class DailysalesComponent implements OnInit {
  public dataarray: any[] = [];
  public openingstock: any[] =[];
  constructor(private fb:FormBuilder,private dbservice:DbserviceService,private router:Router) { }
  dailysales=this.fb.group({
    Product_id:[''],
    Openingstock:[''],
    cstock:[''],
    Description:['']
    // Quantity:['']
  })
   get fcontrols(){
     return this.dailysales.controls;
   }
   onsubmit(){
    this.dbservice.senddailysalesData(this.dailysales.value).then((confirmation:any)=>{console.log(confirmation);
    if(confirmation.alert==="Sucess"){
     alert('Ok')
    }})
    console.log(this.dailysales.value);
    }

    ngOnInit(): void {
      this.dbservice.dropproduct().then((data :any)=>{ 
        this.dataarray=data
      })
      //Showing opening stock 
      this.dbservice.openingstockdata().then((stockdata :any)=>{ 
        console.log(stockdata)
        this.dailysales.get("Openingstock")?.setValue(stockdata[0].Opening_Stock)
      })

    }
  
  }
  
