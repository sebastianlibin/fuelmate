import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-fillingdetails',
  templateUrl: './fillingdetails.component.html',
  styleUrls: ['./fillingdetails.component.scss']
})
export class FillingdetailsComponent implements OnInit {

  public dataarray: any[] = [];
  constructor(private fb:FormBuilder,private dbservice:DbserviceService,private router:Router) { }
  fillingForm=this.fb.group({
    Product_id:[''],
    fdate:[''],
    Volume:[''],
    tamount:[''],
    dname:['']
  })
   get fcontrols(){
     return this.fillingForm.controls;
   }
   onSubmit(){
    this.dbservice.sendfillingData(this.fillingForm.value).then((confirmation:any)=>{console.log(confirmation);
    if(confirmation.alert==="Sucess"){
     alert('Ok')
    }})
    console.log(this.fillingForm.value);
    }

  ngOnInit(): void {
    this.dbservice.dropproduct().then((data :any)=>{ 
      this.dataarray=data
    })
  }

}
