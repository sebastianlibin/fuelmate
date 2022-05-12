import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { DbserviceService } from 'src/app/dbservice.service'; 
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(private fb:FormBuilder,private dbservice:DbserviceService) { }
  payment=this.fb.group({
    amount:['']
   })
  onpayment(){
      this.dbservice.insertpaymentData(this.payment.value).then((confirmation:any)=>{console.log(confirmation);
      if(confirmation.alert==="Sucess"){
      alert('Ok')
      }})
  }
  ngOnInit(): void {
  }

}
