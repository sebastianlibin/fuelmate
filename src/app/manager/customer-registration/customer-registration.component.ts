import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.scss']
})
export class CustomerRegistrationComponent implements OnInit {

  constructor(private fb:FormBuilder,private dbservice:DbserviceService) { } 
  customerregFormGroup=this.fb.group({
    cname:[''],
    oname:[''],
    walletamount:[''],
    contactnumber:[''],
    cemail:[''],
    cusername:[''],
    cpassword:['']
   })
    get fcnotrols()
{
return this.customerregFormGroup.controls;
}
  onSubmit() {
    this.dbservice.sendcregData(this.customerregFormGroup.value).then((confirmation:any)=>{console.log(confirmation);
    if(confirmation.alert==="Sucess"){
    alert('Ok')
    }})
    console.log(this.customerregFormGroup.value);
    }

  ngOnInit(): void {
  }

}
