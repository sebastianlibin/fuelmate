import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-managerreg',
  templateUrl: './managerreg.component.html',
  styleUrls: ['./managerreg.component.scss']
})
export class ManagerregComponent implements OnInit {
  public dataarray: any[] = [];
  constructor(private fb:FormBuilder,private dbservice:DbserviceService) { }
  mreg=this.fb.group({
    Pump_id:[''],
    mname:[''],
    place:[''],
    Qualification:[''],
    Ea:[''],
    pno:[''],
    adate:[''],
    uname:[''],
    psd:['']
  })
   get fcontrols(){
     return this.mreg.controls;
   }
   onsubmit(){
    this.dbservice.sendmanagerData(this.mreg.value).then((confirmation:any)=>{console.log(confirmation);
    if(confirmation.alert==="Sucess"){
    alert('Ok')
    }})
    console.log(this.mreg.value);
    }

  ngOnInit(): void {
    this.dbservice.dropdown().then((data :any)=>{ 
      this.dataarray=data
      console.log(this.dataarray.values)
    })
  }

}
