import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from '../dbservice.service';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.scss']
})
export class CustomerloginComponent implements OnInit {

  constructor(private fb: FormBuilder,private router:Router, private dbservice:DbserviceService) { }
  customer_login=this.fb.group({
    uname:['',Validators.required],
    psw:['',Validators.required]
  })
  ngOnInit(): void {
    /*this.c_id=localStorage.getItem("c_id")
    this.dbservice.getlocalvalues(this.c_id).then((Customer_details)=>{
      this.customer_login.patchValue(Customer_details);
    })*/
  }
  onSubmit() {
      /* let c_id={
         id:localStorage.getItem("c_id"),value:this.customer_login.value
       }*/
      this.dbservice.SendCustomerLogindata(this.customer_login.value).then((confirmation:any) => {
        //console.log(confirmation);
        //Cutomer_details is array return from php page
        if (confirmation.Cutomer_details) {
          localStorage.setItem("c_id",confirmation.Cutomer_details.c_id)
          this.router.navigate(['/chome'])
        }
    else {
    alert("Invalid username or Password")
    }
    })
    console.log(this.customer_login.value)
    }
    }